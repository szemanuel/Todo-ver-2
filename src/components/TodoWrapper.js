import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

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

  const toggleComplete = (id) => {
    //mapeamos a través de los todos, si el id es igual al que le pasamos, tomamos una copia de ese Todo
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //hace un filtro que toma todo lo que no sea igual al id que recibe.
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, isEditing }
          : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, idEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <h1> Tareas a realizar </h1>
      <TodoForm addTodo={addTodo} />
      {/* Ahora necesitamos generar un Todo para cada valor del state. Para eso tenemos que usar un map*/}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export { TodoWrapper };
