import React, { useMemo, useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { Filters } from './Filters';

import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState();

  //Cómo pasamos el valor del TodoForm al TodoWrapper? Con las props. En el componente TodoForm agregamos una prop denominada addTodo

  //En este addTodo tengo las propiedades que tiene el array todo. Recibe con la denominación task el "todo" que sería lo que recibe del input.
  //Le agrego opción isActive: true
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        isActive: true,
      },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    //mapeamos a través de los todos, si el id es igual al que le pasamos, tomamos una copia de ese Todo
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed, isActive: !todo.isActive } : todo
      )
    );
  };

  //hace un filtro que toma todo lo que no sea igual al id que recibe, de esa manera es como si los borrara.
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const filteredTodos = useMemo(() => currentFilter ? todos.filter( filter => filter[currentFilter]) : todos, [todos, currentFilter])

  return (
    <div style={{ marginLeft: 30 }}>
      <h1> Tareas a realizar </h1>
      <TodoForm addTodo={addTodo} />
      {/* Ahora necesitamos generar un Todo para cada valor del state. Para eso tenemos que usar un map*/}
      {filteredTodos.map((todo, index) =>
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
      <Filters setCurrentFilter={setCurrentFilter}  />
    </div>
  );
};

export { TodoWrapper };
