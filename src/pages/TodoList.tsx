import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { Todo } from "../App";

const LOCAL_STORAGE_KEY = "brrmedia-todos";

/**
 * Props for the TodoList component.
 * - todos: Array of to-do items.
 * - setTodos: Function to update the to-do list in parent state.
 */
type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

/**
 * TodoList
 * Displays a list of to-do items with add, edit, delete, and completion functionality.
 * Persists tasks to localStorage for data retention across sessions.
 */
const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  // State for new task input and editing
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Load to-dos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTodos(JSON.parse(stored));
    // eslint-disable-next-line
  }, []);

  // Save to-dos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /**
   * Add a new to-do item.
   */
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  /**
   * Delete a to-do item by id.
   */
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  /**
   * Toggle completion status of a to-do item.
   */
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  /**
   * Start editing a to-do item.
   */
  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  /**
   * Save the edited to-do item.
   */
  const handleEditSave = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      )
    );
    setEditId(null);
    setEditText("");
  };

  /**
   * Cancel editing a to-do item.
   */
  const handleEditCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="todo-card">
      {/* Page title */}
      <h1 className="todo-title">To-Do List</h1>
      {/* Add new task form */}
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {/* To-do list */}
      <ul className="todo-list">
        {todos.length === 0 && (
          <li className="todo-empty">
            <span role="img" aria-label="No tasks" style={{ fontSize: "2rem" }}>📝</span>
            <div>No tasks yet! Add your first to-do above.</div>
          </li>
        )}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isEditing={editId === todo.id}
            editText={editText}
            setEditText={setEditText}
            onEditSave={handleEditSave}
            onEditCancel={handleEditCancel}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;