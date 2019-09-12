import React, {useState, useEffect} from 'react'

function HookCounterOne() {
  const [count, setcount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('hh')
    document.title = `You clicked ${count} times`
  },[count])

  return (
    <div data-testid="one">
          <div data-testid="greetings">Yolo {name}!</div>

      <input type="text" value={name} onChange={(e) => setName(e.target.value) }/>
      <button data-testid="button" onClick={() => setcount(count + 1)}>Click 0 times</button>
    </div>
  )
}

export default HookCounterOne