import React, { useState } from 'react';

const TodoForm = () => {
  const [value, setValue] = useState('');

  //Necesitamos un evento que capture el estado cuando hacemos submit del form. En form creamos el onSubmit={handleSubmit}
  const handleSubmit = (e) => {
    //cuando hacemos submit por default se reload la página para prevenir eso:
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className=""
    onSubmit={handleSubmit}
    >
      <input
        type="text"
        className=""
        placeholder="Próxima tarea"
        onChange={(e) => setValue(e.target.value)}
        />
      <button type="submit" className="">
        Agregar Tarea
      </button>
    </form>
  );
};

export { TodoForm };
