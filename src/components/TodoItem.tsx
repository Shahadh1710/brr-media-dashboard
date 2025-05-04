import React from "react";
import { FaTrash, FaEdit, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { Todo } from "../App";

/**
 * Props for the TodoItem component.
 * - todo: The to-do item object.
 * - onToggle: Function to toggle completion status.
 * - onEdit: Function to start editing a to-do.
 * - onDelete: Function to delete a to-do.
 * - isEditing: Whether this to-do is currently being edited.
 * - editText: The current text in the edit input.
 * - setEditText: Function to update the edit input text.
 * - onEditSave: Function to save the edited to-do.
 * - onEditCancel: Function to cancel editing.
 */
type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => void;
  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  onEditSave: (id: number) => void;
  onEditCancel: () => void;
};

/**
 * TodoItem
 * Renders a single to-do item with:
 * - Completion toggle (icon)
 * - Edit and delete buttons
 * - Inline editing UI
 * - Visual feedback for completed tasks
 */
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
  isEditing,
  editText,
  setEditText,
  onEditSave,
  onEditCancel,
}) => (
  <li className="todo-item">
    {/* Completion toggle icon */}
    <span onClick={() => onToggle(todo.id)} style={{ cursor: "pointer" }}>
      {todo.completed ? (
        <FaCheckCircle color="#388e3c" />
      ) : (
        <FaRegCircle color="#d4af37" />
      )}
    </span>
    {isEditing ? (
      // Inline editing UI
      <>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="todo-edit-input"
        />
        <button onClick={() => onEditSave(todo.id)}>Save</button>
        <button onClick={onEditCancel}>Cancel</button>
      </>
    ) : (
      // Display to-do text and action buttons
      <>
        <span
          className={todo.completed ? "todo-completed" : ""}
          onDoubleClick={() => onEdit(todo.id, todo.text)}
        >
          {todo.text}
        </span>
        <button onClick={() => onEdit(todo.id, todo.text)}>
          <FaEdit />
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <FaTrash />
        </button>
      </>
    )}
  </li>
);

export default TodoItem;