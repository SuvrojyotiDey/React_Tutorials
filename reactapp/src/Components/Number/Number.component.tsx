import React from "react";
const Number = (props: any) => {
    const { labelData, placeHolderData, typeData } = props;
    return (<>
        <div>
            <div>{labelData}</div>
            <input
                type={typeData}
                placeholder={placeHolderData}
            />
        </div>

    </>)
}
export default Number;