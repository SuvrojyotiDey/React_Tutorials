import React from "react";
import { useNavigate } from "react-router-dom";
import handlingNavigation from "../../Utils/handlingNavigation";
import styles from "./Navbar.module.css";
import homeIcon from "../../Assets/homeIcon.svg";
const Navbar = () => {
    
    const navigate=useNavigate();
    return (
        <>
            <div className={styles.navContainer}>
            <div className={styles.leftContainer}>
            <div><img onClick={(e:any)=>handlingNavigation("/newPage", navigate)} src={homeIcon}/></div>
            </div>
            <div className={styles.rightContainer}></div>
            </div>
        </>)
        ;

}
export default Navbar;