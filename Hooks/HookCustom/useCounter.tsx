import { useState } from "react";

/* Making custom hooks with primitive hooks */

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decrement, reset];
  // While calling the hook we will have the return as the left side of the assignment and the right will have the function name with the params passed.
};

export default useCounter;
