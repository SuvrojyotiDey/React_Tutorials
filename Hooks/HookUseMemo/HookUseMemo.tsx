import React, { useEffect, useMemo, useState } from "react";
/**
 * actual use : to memoize the result of a heavy or expensive function
 *
*/

const fib = (n) => {
    console.log('called fib function')
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};
const HookUseMemo = () => {
  const [number, setNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  // case 1: when a heavy function is called 
  /**
   * const series = fib(Number(number)); 
   */

  // case 2: when a heavy function result is memoized
  const series=useMemo(()=>fib(Number(number)),[number]) ;
  
  useEffect(() => {
    console.log("series derived fib called");
  }, [series]);
  
  /** Here every time the state changes due to random input the component is rendered again and the function fib is called.
   * This will slow down overall behavior of the component.
   * The above useEffect will show no effect cause it knows that series is not changed
   */

  return (
    <div>
      <label>Fibonacci : </label>
      <input
        type="number"
        value={number}
        title="sequence"
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>number : {series}</div>
      <label>Random : </label>
      <input
        type="text"
        value={randomInput}
        title="random"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <div>randomInput : {randomInput}</div>
    </div>
  );
};
export default HookUseMemo;
