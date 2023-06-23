import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'
import styles from './Counter.module.css'

/* we have a function component called Counter, that stores some data in a useState hook. 
 There is a variable called count, but it's not coming from a useState hook.
While React includes several built-in hooks like useState and useEffect, other libraries can create their own custom hooks that use React's hooks to build custom logic.
The React-Redux library has a set of custom hooks that allow your React component to interact with a Redux store.
Our components can't talk to the Redux store directly, because we're not allowed to import it into component files. But, useSelector takes care of talking to the Redux store behind the scenes for us. If we pass in a selector function, it calls someSelector(store.getState()) for us, and returns the result.
*/

export function Counter() {
/*   So, we can get the current store counter value by doing:*/
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}