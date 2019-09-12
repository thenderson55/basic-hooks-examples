import React from "react";
import useCounter from './useCounter'

function CustomCounter() {
  
  const [counter, inc, dec, reset] = useCounter(5, 10)

  return (
    <div>
      <p>{counter}</p>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomCounter;
