import React from "react";
const Email = (props: any) => {
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
export default Email;