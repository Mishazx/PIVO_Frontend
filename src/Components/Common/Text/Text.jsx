import {useTheme} from "../../../Providers/ThemeContext";
import styles from "./Text.module.css"
const Text = ({children}) => {
    const theme = useTheme();
    return(
        <div className={`${styles.text} ${styles[theme]}`}>
            {children}
        </div>
    )
}

export default Text;
