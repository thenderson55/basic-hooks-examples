import React, { useState, useEffect, useRef } from 'react'

// useRef - the value will persit through the rerenders while also not causing any 
// additional rerenders when the value changes

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    };
  }, [])

  return (
    <div>
      <p>{timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer
