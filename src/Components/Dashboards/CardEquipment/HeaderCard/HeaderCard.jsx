import Text from "../../../Common/Text/Text";
import HeaderStatus from "./HeaderStatus/HeaderStatus";
import styles from "./HeaderCard.module.css"
import {useTheme} from "../../../../Providers/ThemeContext";

const HeaderCard = ({status, children}) => {
    const theme = useTheme();
    return (
        <div className={`${styles.HeaderCard} ${styles[theme]}`}>
            <Text>{children}</Text>
            <HeaderStatus status={status}/>
        </div>
    )
}

export default HeaderCard;
