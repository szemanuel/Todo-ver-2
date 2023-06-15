import React, { useState, useReducer } from 'react';
import { configureStore } from '@reduxjs/toolkit'



const Counter2 = () =>{



const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}

const store = configureStore({ reducer: counterReducer })
console.log(store.getState())
// {value: 0}



return (
  <div>  </div> 
)

}

export { Counter2 }