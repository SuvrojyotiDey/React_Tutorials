import React from "react";
import ChildA from "./ChildA";
const data1 = React.createContext()
const data2 = React.createContext()
const Parent=()=> {

  const fname = "su";
  const lname = "de"
  return (
    <div className="App">
      <data1.Provider value={fname}>
        <data2.Provider value={lname}>
          <ChildA></ChildA>
        </data2.Provider>
      </data1.Provider>
    </div>
  );
}

export default Parent;
export { data1, data2 };