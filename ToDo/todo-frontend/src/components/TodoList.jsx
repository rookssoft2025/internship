import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo, isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (todos.length === 0) {
    return <div className="empty">No todos yet. Add one above!</div>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
