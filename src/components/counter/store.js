import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})

/* The Redux store is created using the configureStore function from Redux Toolkit. configureStore requires that we pass in a reducer argument.
Our application might be made up of many different features, and each of those features might have its own reducer function. When we call configureStore, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

We have a file named features/counter/counterSlice.js that exports a reducer function for the counter logic. We can import that counterReducer function here, and include it when we create the store.

When we pass in an object like {counter: counterReducer}, that says that we want to have a state.counter section of our Redux state object, and that we want the counterReducer function to be in charge of deciding if and how to update the state.counter section whenever an action is dispatched.

Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). configureStore automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents. 

So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes.

*/