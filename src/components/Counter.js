import React, { useReducer } from 'react';

const Counter = () => {
  //Estado inicial del reducer
  const initialState = {
    value: 0,
  };

  //función reductora (podría llamarse de cualquier forma) con switch case.El reducer SIEMPRE tiene que devolver algo. Esto lo logro por medio del default.
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'incrementar':
        return { ...state, value: state.value + 1 };
      case 'decrementar':
        return { ...state, value: state.value - 1 };
      case 'incrementarPor':
        return { ...state, value: state.value + action.payload };
      default:
        break;
    }
  };

  //El hook useReducer es el que une el estado con el reducer.
  //Al useReducer le puedo mandar un :  I) un reducer II) un estado y III) una función. Se espera que la función le traiga el estado que va a tener la función dsp

  const Reductor = () => {
    //El dispatch es el type, es decir, el string que va a decir “incrementar” o “decrementar” por ej.
    const [state, dispatch] = useReducer(countReducer, initialState);
    console.log(state, dispatch, countReducer, initialState);
    return <div> {state.value} </div>;
  };

return(
 <div> HOLA  </div> 
)
}
export { Counter };
