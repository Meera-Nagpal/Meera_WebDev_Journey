import React, { useState, useEffect } from "react";
import { Trash2, Edit2, Check } from "lucide-react";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem("todos_v1");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all"); // all | active | completed

  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    const newTodo = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      text: t,
      done: false,
      createdAt: Date.now(),
    };
    setTodos((s) => [newTodo, ...s]);
    setText("");
  }

  function toggleDone(id) {
    setTodos((s) => s.map((td) => (td.id === id ? { ...td, done: !td.done } : td)));
  }

  function removeTodo(id) {
    setTodos((s) => s.filter((t) => t.id !== id));
  }

  function startEdit(id) {
    setEditingId(id);
  }

  function saveEdit(id, newText) {
    const t = newText.trim();
    if (!t) return; // do not save empty
    setTodos((s) => s.map((td) => (td.id === id ? { ...td, text: t } : td)));
    setEditingId(null);
  }

  function clearCompleted() {
    setTodos((s) => s.filter((t) => !t.done));
  }

  const visible = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-r from-blue-900 to-cyan-600 p-6 bg-animate">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-white  text-white bg-clip-text drop-shadow-lg">
          To-Do List
        </h1>

        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-600 text-white font-xl"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:opacity-90"
          >
            Add
          </button>
        </form>

        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-full transition ${filter === "all" ? "bg-blue-200 text-blue-900" : "hover:bg-gray-100"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-3 py-1 rounded-full transition  ${filter === "active" ? "bg-blue-200 text-blue-900 " : "hover:bg-red-200"}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1 rounded-full transition ${filter === "completed" ? "bg-blue-200 text-blue-900" : "hover:bg-green-200"}`}
            >
              Completed
            </button>
          </div>

          <div className="text-sm text-black p-2 rounded hover:bg-amber-300">{todos.length} total</div>
        </div>

        <ul className="space-y-3">
          {visible.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between p-4 border rounded-xl bg-gray-50 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleDone(t.id)}
                  aria-label="toggle"
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${t.done ? "bg-green-200 border-green-500" : "bg-white border-gray-300"}`}
                >
                  <Check size={16} />
                </button>

                {editingId === t.id ? (
                  <InlineEditor
                    initial={t.text}
                    onCancel={() => setEditingId(null)}
                    onSave={(val) => saveEdit(t.id, val)}
                  />
                ) : (
                  <div>
                    <div className={`font-medium ${t.done ? "line-through text-gray-700" : "text-gray-800 hover:bg-pink-300  p-3 rounded"}`}>{t.text}</div>
                    <div className="text-xs text-gray-400">{new Date(t.createdAt).toLocaleString()}</div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => startEdit(t.id)} className="p-2 rounded hover:bg-amber-400">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => removeTodo(t.id)} className="p-2 rounded hover:bg-red-400 text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}

          {visible.length === 0 && (
            <li className="text-center text-gray-500 py-6">No tasks to show.</li>
          )}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-s py-1 px-4 rounded bg-red-200 text-red-700 font-semibold">{todos.filter((t) => !t.done).length} remaining</div>
          <div className="flex gap-2">
            <button onClick={clearCompleted} className="px-3 py-1 rounded font-semibold bg-blue-200 text-red-700 text-sm hover:bg-red-300">
              Clear completed
            </button>
            <button onClick={() => setTodos([])} className="px-3 py-1 rounded font-semibold bg-gray-200 text-sm hover:bg-gray-300">
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineEditor({ initial, onCancel, onSave }) {
  const [val, setVal] = useState(initial);
  useEffect(() => setVal(initial), [initial]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(val);
      }}
      className="flex gap-2 items-center"
    >
      <input
        autoFocus
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="px-2 py-1 border rounded focus:ring focus:ring-blue-300"
      />
      <div className="flex gap-1">
        <button type="submit" className="px-2 py-1 rounded bg-green-300 text-black-800 text-sm hover:bg-green-200">
          Save
        </button>
        <button type="button" onClick={onCancel} className="px-2 py-1 rounded text-medium hover:bg-red-300">
          Cancel
        </button>
      </div>
    </form>
  );
}
