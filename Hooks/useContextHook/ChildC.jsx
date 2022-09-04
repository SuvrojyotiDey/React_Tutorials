import React from "react";
import { data1, data2 } from "./Parent";
const ChildC = () => {
    const d1 = React.useContext(data1);
    const d2 = React.useContext(data2);
    return (
        <>
            <div>First name is {d1}</div>
            <div>Last name is {d2}</div>
        </>
    )
}
export default ChildC;
