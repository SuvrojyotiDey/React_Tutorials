import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import TextField from "../../Components/TextField/TextField.component";
import fieldData from "./fieldData.json";
import buttonData from "./buttonData.json";
import Button from "../../Components/Button/Button.Component";
const LoginPage = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => { 
        
        event.preventDefault();
        console.log(userName);
        console.log(password);
    }
    const fieldValueExtract = (data: any, dataType: any) => {
        if (dataType === "text") {
            setUserName(data);
        }
        if (dataType === "password") {
            setPassword(data);
        }
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <img src="" alt="" />
                </div>
                <div className={styles.rightContainer}>
                    <form onSubmit={handleSubmit}>
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
                                                (value: any) => fieldValueExtract(value, textFieldData.type)
                                            }
                                        />
                                    )
                                }
                            )
                        }
                        {
                            buttonData.buttonData.map((buttonValue: any) => {
                                return (
                                    <Button
                                        labelData={buttonValue.inline}
                                        typeData={buttonValue.type}
                                        buttonCustomStyles={styles.buttonField}
                                    />
                                )
                            })
                        }
                    </form>

                </div>
                <div></div>
            </div>
        </>
    );
};
export default LoginPage;