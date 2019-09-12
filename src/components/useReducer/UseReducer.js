import React, { useReducer } from 'react'

const intitialState = 1

const reducer = (state, action) => {
  switch(action) {
    case 'inc':
      return state + 1
    case 'dec':
      return state - 1
    case 'reset':
      return intitialState
    default:
      return state
  }
}

function UseReducer() {

  const [count, dispatch] = useReducer(reducer, intitialState)

  return (
    <div>
      <p>Hi: {count}</p>
      <button onClick={() => dispatch('inc')}>Inc</button>
      <button onClick={() => dispatch('dec')}>Dec</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer
