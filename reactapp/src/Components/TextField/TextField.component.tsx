import React, { useState } from "react";
import checkData from "../../Utils/checkData";

const TextField = (props: any) => {
    const { labelStyles, textFieldCustomStyles, textFieldValue, textFieldData } = props;

    const [currentValue, setCurrentValue] = useState('');

    const customValidty = (e: any) => {
        if (textFieldData.id === "loginPageUserName") {
            e.target.setCustomValidity("Please Enter the username");
        }
        else if (textFieldData.id === "loginPagePassword") {
            e.target.setCustomValidity("Please Enter the password");
        }
    }

    return (
        <>
            <div>
                <div className={labelStyles}>{textFieldData.label}</div>
                <input
                    placeholder={textFieldData.inline}
                    type={textFieldData.type}
                    className={textFieldCustomStyles}
                    onChange={
                        (e: any) => {
                            textFieldValue(e.target.value);
                            setCurrentValue(e.currentTarget.value);
                            // target means element that triggered event.
                            // currentTarget means element that has the event listener.     
                        }
                    }
                    onKeyPress={
                        (e: any) => checkData(e, currentValue)
                    }
                    name={textFieldData.name}
                    onInvalid={customValidty}
                    onInput={
                        (e: any) => e.target.setCustomValidity('')
                    }
                    required
                />
            </div>
        </>
    );
};
export default TextField;