import { useState, useEffect } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDesc, setEditDesc] = useState(todo.desc || '');

  useEffect(() => {
    if (!isEditing) {
      setEditTitle(todo.title);
      setEditDesc(todo.desc || '');
    }
  }, [todo, isEditing]);

  const handleUpdate = async () => {
    if (!editTitle.trim()) return;
    try {
      await onUpdateTodo(todo._id, { title: editTitle.trim(), desc: editDesc.trim() });
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await onDeleteTodo(todo._id);
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <input
          type="text"
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          placeholder="Description"
        />
        <div className="actions">
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <div className="content">
        <h3>{todo.title}</h3>
        {todo.desc && <p>{todo.desc}</p>}
      </div>
      <div className="actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
