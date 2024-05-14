// import React, {useState} from 'react';
// import './AccessControlButton.css'
// import LogoutIcon from '../Items/LogoutIcon';

// const AccessControlButton = ({theme}) => {

//   const [isLoggedOut, setIsLoggedOut] = useState(true);

//   const handleButtonClick = () => {
//     setIsLoggedOut((prevState) => !prevState);
//   };

//   return (
//     <div className={`AccessControlButton ${theme} ${isLoggedOut ? 'logged-out' : 'logged-in'}`}
//     onClick={handleButtonClick}
//     title={isLoggedOut ? 'Вход' : 'Выход'}
//     >
//         <LogoutIcon theme={theme} isLoggedOut={isLoggedOut}/>
//     </div>
//   );
// };

// export default AccessControlButton;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './AccessControlButton.css';
import LogoutIcon from "../../../Icons/LoginIcon/AuthIcon";
import styles from "./AuthButton.module.css"
// import LogoutIcon from '../Items/LogoutIcon';

const AccessControlButton = (props) => {

    const linkTo = props.isLoggedIn ? '/logout' : '/login';

    return (
        <NavLink to={linkTo} className={`${styles.AuthButton} ${styles[props.theme]} ${props.isLoggedIn ? 'logged-in' : 'logged-out'}` }>

            <LogoutIcon theme={props.theme} isLoggedOut={!props.isLoggedIn} />

        </NavLink>
    );
};

export default AccessControlButton;

