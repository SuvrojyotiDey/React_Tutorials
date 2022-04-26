import React from "react";

const TextField = (props: any) => {
    const { labelData, placeholderData,typeData,labelStyles,textFieldCustomStyles } = props;
    return (
        <>
            <div>
                <div className={labelStyles}>{labelData}</div>
                <input
                    placeholder={placeholderData}
                    type={typeData}
                    className={textFieldCustomStyles}
                />
            </div>
        </>
    );
};
export default TextField;