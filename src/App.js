import React, { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count - {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
