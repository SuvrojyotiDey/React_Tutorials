import React, { FormEvent, useEffect, useState } from "react";
import styles from "./Login.module.css";
import TextField from "../../Components/TextField/TextField.component";
import fieldData from "./fieldData.json";
import buttonData from "./buttonData.json";
import Button from "../../Components/Button/Button.Component";
import loginBackground from "../../Assets/loginBackground.jpg";
import { useNavigate } from "react-router-dom";
import handlingNavigation from "../../Utils/handlingNavigation";

const LoginPage = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setErrorMessage('');
    }, [userName, password])

    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log(userName);
        console.log(password);
    }

    const validationFields = (userNameData: any, passwordData: any) => {
        const mockUserName = "suvro";
        const mockPassword = "suvro";
        if (userNameData === mockPassword && passwordData === mockPassword) {
            handlingNavigation("/newPage", navigate);
        }
        else {
            setErrorMessage("Wrong Username and Password");
        }

    }

    const fieldValueExtract = (data: any, dataType: any, identifier: any) => {

        if (dataType === "text" && identifier === "loginPageUserName") {
            setUserName(data);
        }
        if (dataType === "password" && identifier === "loginPagePassword") {
            setPassword(data);
        }
    }

    const buttonValueExtract = (typeData: any, identifier: any) => {
        if (identifier === "loginPageSignIn" && typeData === "submit") {
            validationFields(userName, password);
        }
        if (identifier === "loginPageSignUp") {
            handlingNavigation("/signUp", navigate);
        }
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
                                                    key={textFieldData.id}
                                                    labelData={textFieldData.label}
                                                    labelStyles={styles.label}
                                                    placeholderData={textFieldData.inline}
                                                    typeData={textFieldData.type}
                                                    textFieldCustomStyles={styles.textField}
                                                    textFieldValue={
                                                        (value: any) => fieldValueExtract(value, textFieldData.type, textFieldData.id)
                                                    }
                                                />
                                            )
                                        }
                                    )
                                }
                            </div>

                            <div className={styles.errorMessage}>{errorMessage}</div>

                            <div className={styles.buttonContainer}>
                                {
                                    buttonData.buttonData.map((buttonValue: any) => {
                                        return (
                                            <Button
                                                key={buttonValue.id}
                                                labelData={buttonValue.inline}
                                                typeData={buttonValue.type}
                                                buttonCustomStyles={styles.buttonField}
                                                buttonValue={
                                                    (value: any) => buttonValueExtract(buttonValue.type, buttonValue.id)
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