import React from "react";

const TextField = (props: any) => {
    const { labelData, placeholderData,typeData,customStyles } = props;
    // console.log(props);
    return (
        <>
            <div>
                <div>{labelData}</div>
                <input
                    placeholder={placeholderData}
                    type={typeData}
                    className={customStyles}
                />
            </div>

        </>
    );
};
export default TextField;