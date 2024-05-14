import React from 'react';
import style from '../ButtonLink/ButtonLink.module.css';

const Button = (props) => {
    return (
        <button className={`${style.Button} ${style[props.theme]}`}>
            {props.children}
        </button>
    );
};

export default Button;
