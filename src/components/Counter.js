import React, { useState, useReducer } from 'react';

const Counter = () => {
  //Estado inicial del reducer
  const initialState = { value: 0}

  //función reductora (podría llamarse de cualquier forma) con switch case.El reducer SIEMPRE tiene que devolver algo. Esto lo logro por medio del default.
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'incrementar':
        return { ...state, value: state.value + 1 };
      case 'decrementar':
        return { ...state, value: state.value - 1 };
      case 'incrementarPor':
        return { ...state, value: state.value + action.payload.numero };
        case 'resetear':
        return { ...state, value: 0 };
      default:
        return state;
    }
  };
  //El hook useReducer es el que une el estado con el reducer.
  //Al useReducer le puedo mandar un :  I) un reducer II) un estado y III) una función. Se espera que la función le traiga el estado que va a tener la función dsp


    //El dispatch es el type, es decir, el string que va a decir “incrementar” o “decrementar” por ej.
const [state, dispatch] = useReducer(countReducer, initialState);

const [numero, setNumber] = useState([])

//console.log(numero)
//console.log(state.value)
//console.log(dispatch)

return(
  <div>
 <label> Valor inicial: {state.value} </label>
   <button type="button" onClick={() => dispatch({type: 'incrementar'}) } > + 1 </button>  
   <button type="button" onClick={() => dispatch({type: 'decrementar'}) }> - 1 </button>
   <label> Incrementar valor en : <input type="number" name="number"
    onChange={e =>  setNumber(e.target.value*1)}/> </label>
   <button type="button" onClick={() => dispatch({type: 'incrementarPor', payload: {numero} }) } >+</button>
   <button type="button" onClick={() => dispatch({type: 'resetear' }) } >Resetear</button>
    
   
   </div>
)
}
export { Counter };
