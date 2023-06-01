import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      <p className={task.completed ? "completed" : ""}> {task.task} </p>
      <div style={{ marginLeft: 10 }}>
        <FontAwesomeIcon icon={faCheck} onClick={() => toggleComplete(task.id)} />
        <FontAwesomeIcon style={{ marginLeft: 20 }} icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon style={{ marginLeft: 20 }} icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export { Todo };
