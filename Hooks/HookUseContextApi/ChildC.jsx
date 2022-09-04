import React from "react";
import { data1, data2 } from "./Parent";
const ChildC = () => {

    return (
        <>
            <data1.Consumer>
                {
                    (name1) => {
                        return (
                            <data2.Consumer>
                                {
                                    (name2) => {
                                        return (
                                            <div>fname :{name1} lname:{name2}</div>
                                        )
                                    }
                                }
                            </data2.Consumer>
                        )
                    }
                }
            </data1.Consumer>
        </>
    )
}
export default ChildC;
/**
 * consumer only excepts a function
 */