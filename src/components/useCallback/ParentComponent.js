import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

// useCallback caches the provided function instance itself
// if you need to cache a function - useCallback
// useMemo invokes the provided function and caches it's result
// if you need to cache a result of invoked function - useMemo

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Inc age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Inc salary</Button>
    </div>
  );
}

export default ParentComponent;
