import React from 'react';
import styles from './TopBar.module.css';
import {useTheme} from "../../Providers/ThemeContext";
import ButtonBar from "./ButtonBar/ButtonBar";
import ButtonSettings from "./ButtonSettings/ButtonSettings";
import ButtonProfile from "./ButtonProfile/ButtonProfile";

const TopBar = () => {
    const theme = useTheme();
    return (
        <div className={`${styles.topBar} ${styles[theme]}`}>
            <div className={`${styles.container}`}>
                <ButtonBar to="/production">Производство</ButtonBar>
                <ButtonBar to="/journal">Журналы</ButtonBar>
                <ButtonBar to="/employee">Сотрудники</ButtonBar>
            </div>
            <div className={`${styles.user_container}`}>
                <ButtonProfile />
                <ButtonSettings />
            </div>

        </div>
    );
};

export default TopBar;
