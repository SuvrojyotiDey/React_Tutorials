import React from "react";
const Button=(props:any)=>{
    const {placeholderData,typeData,buttonCustomStyles}=props;
    return(
        <>
        <div>
            <input 
                type={typeData}
                value={placeholderData}
                className={buttonCustomStyles}
            />
        </div>
        </>
    );
};
export default Button;