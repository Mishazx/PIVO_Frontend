import {useTheme} from "../../../Providers/ThemeContext";
import styles from "./Text.module.css"
const Text = ({children, style}) => {
    const theme = useTheme();
    return(
        <div
            className={`${styles.text} ${styles[theme]}`}
            style={style}
        >
            {children}
        </div>
    )
}

export default Text;
