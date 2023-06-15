import React from "react";
import "./style.css";
import { Counter } from "./components/Counter"
import { Counter2 } from "./components/Counter2"
import { TodoWrapper } from "./components/TodoWrapper"


export default function App() {
  return (
    <div>
      <TodoWrapper />
      <Counter />
      <Counter2 />
    </div>
  );
}
