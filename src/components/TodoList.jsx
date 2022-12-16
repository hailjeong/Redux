import React from "react";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.text}>{todo.text}</li>;
      })}
    </ul>
  );
}
