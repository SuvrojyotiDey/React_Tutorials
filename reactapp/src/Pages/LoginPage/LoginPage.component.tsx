import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import TextField from "../../Components/TextField/TextField.component";
import fieldData from "./fieldData.json";
import buttonData from "./buttonData.json";
import Button from "../../Components/Button/Button.Component";
import loginBackground from "../../Assets/loginBackground.jpg";

const LoginPage = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log(userName);
        console.log(password);
    }

    const fieldValueExtract = (data: any, dataType: any, identifier:any) => {

        if (dataType === "text" && identifier==="loginPageUserName") {
            setUserName(data);
        }
        if (dataType === "password" && identifier==="loginPagePassword") {
            setPassword(data);
        }
    }

    const buttonValueExtract=(data: any, identifier:any)=>{
        console.log(data)
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <img src={loginBackground} className={styles.image} alt="" />
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.heading}>Login Page</div>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.textContainer}>
                                {
                                    fieldData.inputData.map(
                                        (textFieldData: any) => {
                                            return (
                                                <TextField
                                                    labelData={textFieldData.label}
                                                    labelStyles={styles.label}
                                                    placeholderData={textFieldData.inline}
                                                    typeData={textFieldData.type}
                                                    textFieldCustomStyles={styles.textField}
                                                    textFieldValue={
                                                        (value: any) => fieldValueExtract(value, textFieldData.type,textFieldData.id)
                                                    }
                                                />
                                            )
                                        }
                                    )
                                }
                            </div>
                            <div className={styles.buttonContainer}>
                                {
                                    buttonData.buttonData.map((buttonValue: any) => {
                                        return (
                                            <Button
                                                labelData={buttonValue.inline}
                                                typeData={buttonValue.type}
                                                buttonCustomStyles={styles.buttonField}
                                                buttonValue={
                                                    (value: any) => buttonValueExtract(value,buttonValue.id)
                                                }
                                            />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </form>
                    </div>

                </div>
                <div></div>
            </div>
        </>
    );
};
export default LoginPage;