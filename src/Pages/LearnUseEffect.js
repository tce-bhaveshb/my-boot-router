import { useState, useEffect } from "react";

export default function LearnUseEffect() {

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  function MyTimer() {
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);
  }

  function Counter() {
    useEffect(() => {
      setCalculation(() => count * count);
    }, [count]);
  }

  return (
    <>
      <h1>I've rendered {count} time.!</h1>
      <p>Number: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>It's Square: {calculation}</p>
    </>
  );

}