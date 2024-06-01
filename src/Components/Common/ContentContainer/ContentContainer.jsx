import {useTheme} from "../../../Providers/ThemeContext";
import styles from "./ContentContainer.module.css"

const ContentContainer = ({children}) => {
  return(
    <div className={`${styles.Container}`}>
      {children}
    </div>
  );
}

export default ContentContainer;
