import React, {useState} from 'react';
import styles from './Sidebar.module.css'
import ButtonLink from "../Common/ButtonLink/ButtonLink";
import {useTheme} from "../../Providers/ThemeContext";
import ToggleButton from "./ToggleButton/ToggleButton";
import SwitchThemeButton from "./SwitchThemeButton/SwitchThemeButton";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const theme = useTheme()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${styles[theme]}`}>
            <ToggleButton onClick={toggleSidebar} isOpen={isOpen}/>
            <div className={`${styles.panel} ${styles[theme]} ${isOpen ? styles.open : styles.close}`}>
                <div className={`${styles.UpMenuContainer}`}>
                    <ButtonLink to="/production">Production</ButtonLink>
                    <ButtonLink to="/journal">Journal</ButtonLink>
                    <ButtonLink to="/employee">Employee</ButtonLink>
                </div>
                <div className={`${styles.DownMenuContainer}`}>
                    {/*<div className={`${styles.UserContainer}`}>*/}

                    {/*</div>*/}
                    <div className={`${styles.ButtonContainer}`}>
                        <div className={`${styles.text} ${styles[theme]}`}>Switch theme</div>
                        {/*<AuthButton theme={props.theme} isLoggedIn={props.isLoggedIn}/>*/}

                        <SwitchThemeButton isChecked={isOpen}/>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Sidebar;

