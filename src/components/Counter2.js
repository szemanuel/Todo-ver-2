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


//The current Redux application state lives in an object called the store .
//The store is created by passing in a reducer, and has a method called getState that returns the current state value:
const store = configureStore({ reducer: counterReducer })
console.log(store.getState())
// {value: 0}

//Dispatch
//The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an //action object. The store will run its reducer function and save the new state value inside, and we can call getState() to //retrieve the updated value

store.dispatch({ type: 'counter/increment' })
console.log(store.getState())
// {value: 1}

//You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the //////store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they ///////update the state in response.




return (
  <div>  </div> 
)

}

export { Counter2 }