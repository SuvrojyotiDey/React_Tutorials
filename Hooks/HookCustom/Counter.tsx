import React from "react";
import useCounter from "./useCounter.tsx";

/* Case 1: When we use it as a component and pass it to the parent */

// const Counter = () => {
//   const [count, setCount] = React.useState(0);
//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };
//   return (
//     <>
//       <div>Counter</div>
//       <div>{count}</div>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// };

/* Case 2: When we import a custom hooks with the same functionalities as case 1*/

const Counter = () => {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
