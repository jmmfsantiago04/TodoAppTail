// src/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onComplete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);

  const handleSave = () => {
    onUpdate(todo.id, editTitle, editContent);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center p-4 mb-4 bg-white rounded shadow ${todo.completed ? 'opacity-60 line-through' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onComplete}
        className="mr-4 cursor-pointer"
      />
      {isEditing ? (
        <div className="flex-grow">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <button onClick={handleSave} className="mr-2 p-2 bg-green-500 text-white rounded hover:bg-green-700">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex-grow">
          <h3 className="font-bold">{todo.title}</h3>
          <p>{todo.content}</p>
          <button onClick={() => setIsEditing(true)} className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Edit
          </button>
          <button onClick={onDelete} className="p-2 bg-red-500 text-white rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
