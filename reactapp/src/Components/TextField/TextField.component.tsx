import React from "react";

const TextField = (props: any) => {
    const { labelData, placeholderData, typeData, labelStyles, textFieldCustomStyles, fieldValue } = props;
    const setValue = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <div>
                <div className={labelStyles}>{labelData}</div>
                <input
                    placeholder={placeholderData}
                    type={typeData}
                    className={textFieldCustomStyles}
                    onChange={(e: any) => {
                        setValue(e.target.value)
                    }
                    }
                />
            </div>
        </>
    );
};
export default TextField;