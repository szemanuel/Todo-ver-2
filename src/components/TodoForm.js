import React, { useState } from 'react';

//Con la prop addTodo logramos que la tarea pase del TodoForm al TodoWrapper

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  //Necesitamos un evento que capture el estado cuando hacemos submit del form. En form creamos el onSubmit={handleSubmit}
  const handleSubmit = (e) => {
    //cuando hacemos submit por default se reload la página para prevenir eso:
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        className=""
        placeholder="Próxima tarea"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="">
        Agregar Tarea
      </button>
    </form>
  );
};

export { TodoForm };
