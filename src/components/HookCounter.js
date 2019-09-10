import React from 'react'

function HookCounter({ name }) {
  const initialCount = 0
  const [count, setCount] = React.useState(initialCount)
  const [names, setNames] = React.useState({firstName: "", lastName: ""})

  function incrementFive(){
    for(let i = 0; i < 5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div data-test="hook-component">
      <div data-testid="greeting">Yolo {name}!</div>
      <div data-test="counter-display">Count: {count}</div> 
      <button data-test="reset-button" onClick={() => setCount(initialCount)}>Resest</button>
      <button data-test="increment-button" onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
      <button data-test="decrement-button" onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
      <button onClick={incrementFive}>Put Five ooon it!</button>

      <form action="">
        <input data-testid="firstName-input" type="text" value={names.firstName} onChange={(e) => setNames({...name, firstName: e.target.value})}/>
        <input type="text" value={names.lastame} onChange={(e) => setNames({...names, lastName: e.target.value})}/>
        <h3 data-testid="firstName-output">Your first name is: {names.firstName}</h3>
        <h3>Your last name is: {names.lastName}</h3>
      </form>
    </div>
  )
}

export default HookCounter

