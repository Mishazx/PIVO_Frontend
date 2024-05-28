import ProfileIcon from "../../../Icons/ProfileIcon/ProfileIcon";
import React from "react";
import {useTheme} from "../../../Providers/ThemeContext";

const ButtonProfile = () => {
    const theme = useTheme()
    const color = theme ? 'white' : 'black';
    return(
        <div>
            <ProfileIcon color={color}/>
        </div>
    )
}

export default ButtonProfile;
