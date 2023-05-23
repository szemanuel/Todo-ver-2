import React, { useState } from 'react';

const TodoForm = () => {
  const [value, setValue] = useState('');

  return (
    <form className="">
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
