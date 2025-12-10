import React, { useState, useRef, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./Playground.css";

/**
 * Simple Imagination Playground (MVP)
 * - Drag items from palette into canvas
 * - Click item to edit title / description
 * - Export / Import JSON, share via base64 code
 */

const PALETTE = [
  { id: "realm", label: "Realm", color: "#7c3aed", icon: "🌌" },
  { id: "portal", label: "Portal", color: "#0ea5e9", icon: "🌀" },
  { id: "creature", label: "Creature", color: "#f97316", icon: "🦄" },
  { id: "artifact", label: "Artifact", color: "#10b981", icon: "🔮" }
];

export default function Playground() {
  const [items, setItems] = useState([]); // {id, type, x, y, title, desc}
  const [editing, setEditing] = useState(null);
  const canvasRef = useRef(null);

  // place an item at centered position in canvas
  const placeItem = (type) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const id = `${type}-${Date.now()}`;
    const newItem = {
      id,
      type,
      x: rect.width / 2 - 40,
      y: rect.height / 2 - 40,
      title: `${type[0].toUpperCase() + type.slice(1)}`,
      desc: ""
    };
    setItems((s) => [...s, newItem]);
  };

  // drag handlers
  useEffect(() => {
    let dragId = null;
    let offset = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      const target = e.target.closest(".pg-item");
      if (!target) return;
      dragId = target.dataset.id;
      const item = items.find((i) => i.id === dragId);
      offset.x = e.clientX - item.x;
      offset.y = e.clientY - item.y;
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
      if (!dragId) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const nx = e.clientX - rect.left - offset.x;
      const ny = e.clientY - rect.top - offset.y;
      setItems((prev) => prev.map((it) => (it.id === dragId ? { ...it, x: nx, y: ny } : it)));
    };

    const onPointerUp = () => {
      dragId = null;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("pointerdown", onPointerDown);
    return () => {
      if (canvas) canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, [items]);

  const openEdit = (id) => {
    const it = items.find((i) => i.id === id);
    setEditing(it ? { ...it } : null);
  };

  const saveEdit = () => {
    setItems((prev) => prev.map((it) => (it.id === editing.id ? editing : it)));
    setEditing(null);
  };

  // export/import
  const exportJSON = () => {
    const payload = JSON.stringify({ items, createdAt: Date.now() });
    const code = btoa(unescape(encodeURIComponent(payload)));
    navigator.clipboard?.writeText(code);
    alert("Share code copied to clipboard (base64). Paste it using Import.");
  };

  const importJSON = async () => {
    const code = prompt("Paste playground code (base64) here:");
    if (!code) return;
    try {
      const json = decodeURIComponent(escape(atob(code)));
      const parsed = JSON.parse(json);
      if (parsed.items) setItems(parsed.items);
      else alert("Invalid code");
    } catch (err) {
      alert("Failed to parse code.");
    }
  };

  const clearAll = () => {
    if (("Clear all items?")) setItems([]);
  };

  return (
    <div className="pg-root">
      <div className="pg-sidebar">
        <h4>Imagination Playground</h4>
        <p className="muted">Drag elements into the canvas, edit, export & share.</p>

        <div className="pg-palette">
          {PALETTE.map((p) => (
            <button key={p.id} className="pg-palette-btn" onClick={() => placeItem(p.id)}>
              <span className="pg-emoji">{p.icon}</span>
              <div>
                <div className="pg-palette-label">{p.label}</div>
                <small className="muted">{p.id}</small>
              </div>
            </button>
          ))}
        </div>

        <div className="pg-controls">
          <Button size="sm" onClick={exportJSON}>Export (copy code)</Button>{" "}
          <Button size="sm" variant="outline-secondary" onClick={importJSON}>Import</Button>{" "}
          <Button size="sm" variant="danger" onClick={clearAll}>Clear</Button>
        </div>

        <div className="pg-list">
          <h6>Elements</h6>
          {items.length === 0 && <p className="muted">No items yet — add from the palette.</p>}
          {items.map((it) => (
            <div key={it.id} className="pg-list-item">
              <button className="link-like" onClick={() => openEdit(it.id)}>{it.title}</button>
              <small className="muted ms-2">{it.type}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-canvas" ref={canvasRef}>
        {items.map((it) => (
          <div
            key={it.id}
            data-id={it.id}
            className={`pg-item pg-item-${it.type}`}
            style={{ transform: `translate(${it.x}px, ${it.y}px)` }}
            onDoubleClick={() => openEdit(it.id)}
            title="Drag to move • double-click to edit"
          >
            <div className="pg-item-inner">
              <div className="pg-item-title">{it.title}</div>
              <div className="pg-item-type">{it.type}</div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={!!editing} onHide={() => setEditing(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Element</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editing && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={editing.desc} onChange={(e) => setEditing({ ...editing, desc: e.target.value })} />
              </Form.Group>
              <Form.Text className="text-muted">Position: {Math.round(editing?.x)} x {Math.round(editing?.y)}</Form.Text>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditing(null)}>Cancel</Button>
          <Button onClick={saveEdit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
