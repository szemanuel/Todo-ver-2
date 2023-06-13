import React from "react";
import "./style.css";
import { Counter } from "./components/Counter"
import { TodoWrapper } from "./components/TodoWrapper"


export default function App() {
  console.log(TodoWrapper)
  return (
    <div>
      <TodoWrapper />
      <Counter />
    </div>
  );
}
