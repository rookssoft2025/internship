import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from './services/todoApi';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getAllTodos();
      setTodos(data);
    } catch (err) {
      setError('Failed to load todos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      const newTodo = await createTodo(todoData);
      setTodos(prevTodos => [...prevTodos, newTodo]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const handleUpdateTodo = async (id, todoData) => {
    try {
      await updateTodo(id, todoData);
      await fetchTodos();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Todo App</h1>
      </div>

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={fetchTodos}>Retry</button>
        </div>
      )}

      <TodoForm onAddTodo={handleAddTodo} />
      
      <TodoList
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
