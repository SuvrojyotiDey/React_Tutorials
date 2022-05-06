import React, { useState } from "react";
import Section from "../../Components/Section/Section.component";
const SignUp = () => {
    const [data,setData]=useState('');
    const handleSubmit=()=>{
    }
    return (<>
        <div>This is signup page</div>
        <Section></Section>
    </>
    );
};
export default SignUp;
