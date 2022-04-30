import React from "react";
const Button = (props: any) => {
    const { labelData, typeData, buttonCustomStyles, buttonValue } = props;
    return (
        <>
            <div>
                <input
                    type={typeData}
                    value={labelData}
                    className={buttonCustomStyles}
                    onClick={
                        (e: any) => {
                            buttonValue(e.target.value)
                        }
                    }
            />
            </div>
        </>
    );
};
export default Button;