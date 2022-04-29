import React from "react";

const TextField = (props: any) => {
    const { labelData, placeholderData, typeData, labelStyles, textFieldCustomStyles, textFieldValue } = props;
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
                            textFieldValue(e.target.value)
                        }
                    }
                />
            </div>
        </>
    );
};
export default TextField;