import React, { useState } from 'react';
import TodoItem from './TodoItem';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddTodo = () => {
    if (newTitle.trim() && newContent.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTitle, content: newContent, completed: false }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id, title, content) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title, content } : todo
    );
    setTodos(updatedTodos);
  };

  const handleSortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
    setTodos(sortedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter todo title"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Enter todo content"
          className="w-full p-2 mb-2 border rounded"
        />
        <button onClick={handleAddTodo} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Add Todo
        </button>
        <button onClick={handleSortTodos} className="w-full mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-700">
          Sort Alphabetically
        </button>
      </div>
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo.id)}
            onComplete={() => handleCompleteTodo(todo.id)}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
