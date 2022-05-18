import React, { FormEvent, useEffect, useState } from "react";
import styles from "./Login.module.css";
import TextField from "../../Components/TextField/TextField.component";
import fieldData from "./fieldData.json";
import buttonData from "./buttonData.json";
import Button from "../../Components/Button/Button.Component";
import loginBackground from "../../Assets/loginBackground.jpg";
import { useNavigate } from "react-router-dom";
import handlingNavigation from "../../Utils/handlingNavigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

    const [dataValue, setDataValue] = useState({
        userName: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setErrorMessage('');
    }, [dataValue.userName, dataValue.password])

    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(dataValue.userName);
        console.log(dataValue.password);
    }

    const validationFields = (userNameData: any, passwordData: any) => {
        const mockUserName = "suvro";
        const mockPassword = "suvro123";
        if (userNameData === mockUserName && passwordData === mockPassword) {
            setTimeout(
                () => handlingNavigation("/newPage", navigate),
                3000
            );
            toast.success("Login successful", { position: "top-center", autoClose: 2000 });
        }
        else if (userNameData !== "" && passwordData !== "") {
            setErrorMessage("Wrong Username and Password");
            toast.error("Wrong Username and Password", { position: "top-center", autoClose: 2000 });
        }

    }

    const fieldValueExtract = (data: any, dataType: any, identifier: any) => {

        if (dataType === "userName" && identifier === "loginPageUserName") {
            setDataValue({
                ...dataValue,
                userName: data
            }
            );
        }

        if (dataType === "userPassword" && identifier === "loginPagePassword") {
            setDataValue({
                ...dataValue,
                password: data
            }
            );
        }

    }

    const buttonValueExtract = (typeData: any, identifier: any) => {

        if (identifier === "loginPageSignIn" && typeData === "submit") {
            validationFields(dataValue.userName, dataValue.password);
        }

        if (identifier === "loginPageSignUp") {
            handlingNavigation("/signUp", navigate);
        }
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <ToastContainer />
                <div className={styles.leftContainer}>
                    <img src={loginBackground} className={styles.image} alt="" />
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.textContainer}>
                                {
                                    fieldData.inputData.map(
                                        (textFieldData: any) => {
                                            return (
                                                <TextField
                                                    key={textFieldData.id}
                                                    labelStyles={styles.label}
                                                    textFieldCustomStyles={styles.textField}
                                                    textFieldValue={
                                                        (value: any) => {
                                                            fieldValueExtract(value, textFieldData.name, textFieldData.id)
                                                        }
                                                    }
                                                    textFieldData={textFieldData}
                                                />
                                            )
                                        }
                                    )
                                }
                            </div>

                            {/* <div className={styles.errorMessage}>{errorMessage}</div> */}

                            <div className={styles.buttonContainer}>
                                {
                                    buttonData.buttonData.map((buttonValue: any, index: any) => {
                                        // array.map(function(currentValue, index, arr), thisValue)- "map syntax"
                                        return (
                                            <Button
                                                key={buttonValue.id}
                                                buttonCustomStyles={index === 0 ? styles.buttonFieldPrimary : styles.buttonFieldSecondary}
                                                buttonValue={
                                                    (value: any) => buttonValueExtract(buttonValue.type, buttonValue.id)
                                                }
                                                buttonData={buttonValue}
                                            />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LoginPage;