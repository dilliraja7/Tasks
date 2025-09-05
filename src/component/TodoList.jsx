import React from "react";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <span>{todo}</span>
          <button onClick={() => deleteTodo(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
