import React, {useEffect, useRef, useState} from 'react';
import SettingsIcon from "../../../Icons/SettingsIcon/SettingsIcon";
import {useTheme} from "../../../Providers/ThemeContext";
import styles from './ButtonSettings.module.css'
import Text from "../../Common/Text/Text";

const ButtonSettings = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuStyle, setMenuStyle] = useState({});
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (showMenu && buttonRef.current && menuRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const menuRect = menuRef.current.getBoundingClientRect();


            let positionStyles = {
                top: buttonRect.bottom + window.scrollY,
                left: buttonRect.left + window.scrollX
            };

            // Проверяем, выходит ли меню за правый край экрана
            if (buttonRect.left + menuRect.width > window.innerWidth) {
                positionStyles.left = buttonRect.right - menuRect.width + window.scrollX;
            }

            // Проверяем, если меню все равно выходит за экран, позиционируем его относительно правого края кнопки
            if (positionStyles.left + menuRect.width > window.innerWidth) {
                positionStyles = {
                    top: buttonRect.bottom + window.scrollY,
                    right: window.innerWidth - buttonRect.right + window.scrollX
                };
            }

            setMenuStyle(positionStyles);
        }
    }, [showMenu]);

    // const theme = useTheme();
    // const [showMenu, setShowMenu] = useState(false);
    // const handleMenuToggle = () => {
    //     setShowMenu(!showMenu);
    // };
    const options = [
        {label: 'Option 1', value: 'option1'},
        {label: 'Option 2', value: 'option2'},
// Add more options as needed
    ];
    return (
        <div className={styles.container}>
            <button ref={buttonRef} className={styles.button} onClick={handleMenuToggle}>
                <SettingsIcon/>
            </button>
            {showMenu && (
                <div ref={menuRef} className={styles.menu} style={menuStyle}>
                    <ul className={styles.menuList}>
                        {options.map((option, index) => (
                            <li key={index} className={styles.menuItem}>
                                <a href="#" onClick={() => {
                                }}>
                                    {option.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default ButtonSettings;
