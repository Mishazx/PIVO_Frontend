import {useTheme} from "../../../Providers/ThemeContext";
import styles from "./Container.module.css"


const Container = ({style, children}) => {
    const theme = useTheme();
    return (
        <div className={`${styles.Container} ${styles[theme]} ${style}`}>
            {children}
        </div>
    )
}

export default Container;
