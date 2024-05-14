import {useTheme} from "../../../Providers/ThemeContext";
import styles from "./ContentContainer.module.css"

const ContentContainer = ({children}) => {
  const theme = useTheme();
  return(
    <div className={`${styles.Container} ${styles[theme]}`}>
      {children}
    </div>
  );
}

export default ContentContainer;
