import {useTheme} from "../../../Providers/ThemeContext";
import styles from "./Container.module.css"


const Container = ({children}) => {
    const theme = useTheme();
    return (
        <div className={`${styles.Container} ${styles[theme]}`}>
            {children}
        </div>
    )
}

export default Container;
