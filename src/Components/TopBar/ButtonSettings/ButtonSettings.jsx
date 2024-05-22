import React, { useState } from 'react';
import SettingsIcon from "../../../Icons/SettingsIcon/SettingsIcon";
import {useTheme} from "../../../Providers/ThemeContext";
const ButtonSettings = () => {
    const theme = useTheme();
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
// Add more options as needed
    ];
    return (
        <div>
            <button style={{}} onClick={handleMenuToggle}>
                <SettingsIcon />
            </button>
            {showMenu && (
                <ul>
                    {options.map((option, index) => (
                        <li key={index}>
                            <a href="#" onClick={() => { /* Handle option click */ }}>
                                {option.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default ButtonSettings;
