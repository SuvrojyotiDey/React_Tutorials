import React, { useState } from "react";
import checkData from "../../Utils/checkData";

const TextField = (props: any) => {
    const { labelData, placeholderData, typeData, labelStyles, textFieldCustomStyles, textFieldValue ,nameData} = props;

    const [currentValue, setCurrentValue] = useState('');

    return (
        <>
            <div>
                <div className={labelStyles}>{labelData}</div>
                <input
                    placeholder={placeholderData}
                    type={typeData}
                    className={textFieldCustomStyles}
                    onChange={
                        (e: any) => {
                            textFieldValue(e.target.value);
                            setCurrentValue(e.currentTarget.value);
                            // target means element that triggered event.
                            // currentTarget means element that has the event listener.     
                        }
                    }
                    defaultValue={textFieldValue}
                    // In React, defaultValue is used with uncontrolled form components whereas 
                    // value is used with controlled form components. 
                    // They should not be used together in a form element.
                    onKeyPress={(e: any) => checkData(e, currentValue)}
                    name={nameData}
                    required
                />
            </div>
        </>
    );
};
export default TextField;