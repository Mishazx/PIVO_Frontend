import styles from './HeaderStatus.module.css';
const HeaderStatus = ({ status }) => {

    const tooltipText = status === 'Работает' ? 'Работает' : status === 'Требует обслуживания' ? 'Требует обслуживания' : 'Не работает';
    return (
        <div className={`
                ${styles.status} 
                ${status === 'Работает' ? styles.green :
            status === "Требует обслуживания" ? styles.yellow : styles.red}`}
             title={tooltipText} // Add the title attribute here
        >
            <div className={styles.tooltip}>{tooltipText}</div>
        </div>
    );
};

export default HeaderStatus;
