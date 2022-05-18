import React from "react";
const Button = (props: any) => {
    const { buttonCustomStyles, buttonValue, buttonData } = props;
    return (
        <>
            <div>
                <input
                    type={buttonData.type}
                    value={buttonData.inline}
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