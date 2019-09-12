import React, { useState, useMemo } from "react";

// useCallback caches the provided function instance itself
// if you need to cache a function - useCallback
// useMemo invokes the provided function and caches it's result
// if you need to cache a result of invoked function - useMemo

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // useMemo returns a cached value 
  const isEven = useMemo(() => {
    //Simulate a heavy function
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 == 0;
  }, [counterOne]);

  

  return (
    <div>
      <button onClick={() => incOne()}>C1: {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={() => incTwo()}>C2: {counterTwo}</button>
    </div>
  );
}

export default Counter;
