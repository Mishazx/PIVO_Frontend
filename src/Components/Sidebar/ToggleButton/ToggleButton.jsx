import React from "react";
import './ToggleButton.css'
import {useTheme} from "../../../Providers/ThemeContext";

const ToggleButton = ({onClick, isOpen}) => {
    const theme = useTheme()

    return (
        <div className={`ToggleButton ${theme}`} onClick={onClick}>
            {isOpen ? "✕" : "☰"}
        </div>
    );
}

export default ToggleButton;
