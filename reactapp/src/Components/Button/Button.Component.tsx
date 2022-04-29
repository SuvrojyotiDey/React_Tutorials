import React from "react";
const Button=(props:any)=>{
    const {labelData,typeData,buttonCustomStyles}=props;
    return(
        <>
        <div>
            <input 
                type={typeData}
                value={labelData}
                className={buttonCustomStyles}
            />
        </div>
        </>
    );
};
export default Button;