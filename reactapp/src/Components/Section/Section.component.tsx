import React from "react";
import TextField from "../TextField/TextField.component";
import Number from "../Number/Number.component";
import Email from "../Email/Email.component";
import Date from "../Date/Date.component";
import sectionData from "./section.json";

const Section = () => {

    // console.log(sectionData.section3);
    return (
        <>
            {
                sectionData.section3.map((sectionValue: any) => {
                    console.log(sectionValue);
                    console.log(sectionValue.inputType);
                    <div>
                        <Email
                            labelData={sectionValue.label}
                            placeholderData={sectionValue.placeHolderData}
                            typeData={sectionValue.inputType}
                        />
                    </div>
                }
                )
            }
        </>
    )


}
export default Section;