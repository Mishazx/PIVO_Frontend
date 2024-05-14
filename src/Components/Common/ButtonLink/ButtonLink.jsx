import React from 'react';
// import style from './ButtonLink.module.css';
import style from './ButtonLink.module.css';
import { NavLink } from 'react-router-dom';
import {useTheme} from "../../../Providers/ThemeContext";


const ButtonLink = ({to, children}) => {
    const theme = useTheme();
    return (
        <NavLink
            className={({ isActive }) => `${style.Button} ${style[theme]} ${isActive? style.active : ''}`}
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default ButtonLink;
