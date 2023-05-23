import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //Cómo pasamos el valor del TodoForm al TodoWrapper? Con las props. En el componente TodoForm agregamos una prop denominada addTodo

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  return (
    <div>
      <h1> Tareas a realizar </h1>
      <TodoForm addTodo={addTodo} />
      {/* Ahora necesitamos generar un Todo para cada valor del state. Para eso tenemos que usar un map*/}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export { TodoWrapper };
