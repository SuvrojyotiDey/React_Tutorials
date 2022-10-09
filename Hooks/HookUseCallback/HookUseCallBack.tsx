import React, { useCallback, useEffect, useState } from "react";
/**
 * actual use : When a function is in the dependency array of useEffect
 */

const HookUseCallBack = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(1);
  const [num2] = useState(2);

  // case 1 : not using call back and understanding the concept of referential equality

  /** const sum=()=>{
         return num1+num2;
     };
    useEffect(()=>{
         console.log(`${sum()}`);
         setResult(sum());
     },[sum])
    */
  /**
     Here we can see that the sum return value is not changed,
     but for every change in input the render will rerender the entire thing resulting to sum function being stored 
     into a different address scope.
     thus it will thing that the sum is changed and the use effect will be invoked.
    */

  // case 2: using useCallBack

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  useEffect(() => {
    console.log(`${sum()}`);
    setResult(sum());
  }, [sum]);
  /**
   * here the callback will also have a dependency array for which the useffect will only invoke
   * when num1 or num2 will change
   */

  return (
    <div>
      <label>Input Tag : </label>
      <input
        title="TextField"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div>input value : {userInput}</div>
      <div>Result : {result}</div>
    </div>
  );
};

export default HookUseCallBack;
