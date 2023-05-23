import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const Todo = ({task, toggleComplete}) => {
  return(
  <div>
     <p onClick={() => toggleComplete(task.id)}> {task.task} </p>
    <div>
      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </div>
  </div>
)};

export { Todo };
