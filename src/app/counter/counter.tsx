'use client'

import { useState } from "react";

export const Counter = () =>  {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount(count + 1);
  }

    return (
      <>
        <button onClick={handleIncrementCount}>Increment</button>
        <h1>{count}</h1>
      </>
    );
  };
