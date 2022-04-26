import React from "react";
import styles from "./Login.module.css";
import TextField from "../../Components/TextField/TextField.component";
import data from "./fieldData.json";

const LoginPage = () => {
    console.log(data.inputData);
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <img src="" alt="" />
                </div>
                <div className={styles.rightContainer}>
                    {
                        data.inputData.map(
                            (textFieldData: any) => {
                                return (
                                    <TextField
                                        labelData={textFieldData.label}
                                        labelStyles={styles.label}
                                        placeholderData={textFieldData.inline}
                                        typeData={textFieldData.type}
                                        textFieldCustomStyles={styles.textField}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    );
};
export default LoginPage;