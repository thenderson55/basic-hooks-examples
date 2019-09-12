import React, { useReducer } from 'react'

const intitialState = {
  firstCounter: 0,
  secondCounter: 10
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'inc':
      return {...state, firstCounter: state.firstCounter + 1}
    case 'dec':
      return {...state, firstCounter: state.firstCounter - 1}
    case 'inc2':
      return {...state, secondCounter: state.secondCounter + action.value}
    case 'dec2':
      return {...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
      return intitialState
    default:
      return state
  }
}

function UseReducerTwo() {

  const [count, dispatch] = useReducer(reducer, intitialState)

  return (
    <div>
      <p>Hi: {count.firstCounter}</p>
      <button onClick={() => dispatch({type: 'inc'})}>Inc</button>
      <button onClick={() => dispatch({type: 'dec'})}>Dec</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <p>Hi: {count.secondCounter}</p>
      <button onClick={() => dispatch({type: 'inc2', value: 2})}>Inc</button>
      <button onClick={() => dispatch({type: 'dec2', value: 2})}>Dec</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducerTwo