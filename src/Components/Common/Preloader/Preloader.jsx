import React from "react";
// import preloader from "../../../Assets/Images/Rolling-1s-200px.gif";
import styles from "./Preloader.module.css"

const Preloader = () => {

    return (
        <div className={styles.container}>
            {/*<img src={preloader} alt={'preloader'}/>*/}
            <div className={styles.spinner}></div>
            {/*ЗАГРУЗКА*/}
        </div>
    );
}

export default Preloader;
