import React, { useState, useEffect } from "react";

// useCallback caches the provided function instance itself
// if you need to cache a function - useCallback
// useMemo invokes the provided function and caches it's result
// if you need to cache a result of invoked function - useMemo

function SimpleCounter() {
  const initialCount = Number(window.localStorage.getItem('count') || 0)
  const [count, setCount] = useState(initialCount);

  const inc = () => setCount(count + 1);

  useEffect(() => {
    window.localStorage.setItem('count', count)

  }, [count])

  return <button onClick={inc}>{count}</button>;
}

export default SimpleCounter;
