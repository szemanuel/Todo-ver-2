import React from "react";
import "./style.css";
import { TodoWrapper } from "./components/TodoWrapper"
import { Filters } from "./components/Filters"

export default function App() {
  console.log(TodoWrapper)
  return (
    <div>
      <TodoWrapper />
    </div>
  );
}
