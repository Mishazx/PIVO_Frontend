import React from "react";
import styles from './SwitchThemeButton.module.css'
import {useTheme, useToggleTheme} from "../../../Providers/ThemeContext";

const SwitchThemeButton = () => {
    const theme = useTheme();
    const toggleTheme = useToggleTheme();

    return (
        <div className={`${styles.SwitchThemeButton} ${styles[theme]}`} onClick={toggleTheme}>
            <input
                type="checkbox"
                // checked={isChecked}
                onChange={toggleTheme}
            />
            <span className={`${styles.slider}`}></span>
        </div>
    );
}

export default SwitchThemeButton;
