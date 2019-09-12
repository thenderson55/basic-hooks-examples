import {useState} from 'react'

function useCounter(initialCount = 0, value) {
  const [counter, setCounter] = useState(initialCount);

  const inc = () => {
    setCounter(prevCount => prevCount + value);
  };

  const dec = () => {
    setCounter(prevCount => prevCount - value);
  };

  const reset = () => {
    setCounter(initialCount)
  }

  return [counter, inc, dec, reset]
}

export default useCounter
