import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from './counterSlice'

/* We have a function component called Counter, that stores some data in a useState hook. 
 There is a variable called count, but it's not coming from a useState hook.
While React includes several built-in hooks like useState and useEffect, other libraries can create their own custom hooks that use React's hooks to build custom logic.
The React-Redux library has a set of custom hooks that allow your React component to interact with a Redux store.
First, the useSelector hook lets our component extract whatever pieces of data it needs from the Redux store state.
Earlier, we saw that we can write "selector" functions, which take state as an argument and return some part of the state value.
Our components can't talk to the Redux store directly, because we're not allowed to import it into component files. But, useSelector takes care of talking to the Redux store behind the scenes for us. If we pass in a selector function, it calls someSelector(store.getState()) for us, and returns the result.
Similarly, we know that if we had access to a Redux store, we could dispatch actions using action creators, like store.dispatch(increment()). Since we don't have access to the store itself, we need some way to have access to just the dispatch method.
The useDispatch hook does that for us, and gives us the actual dispatch method from the Redux store
*/

export function Counter3() {
/*   So, we can get the current store counter value by doing:*/
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="">
        <button
          className=""
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="">{count}</span>
        <button
          className=""
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}