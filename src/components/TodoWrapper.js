import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from "uuid"
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //Cómo pasamos el valor del TodoForm al TodoWrapper? Con las props. En el componente TodoForm agregamos una prop denominada addTodo

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export { TodoWrapper };
