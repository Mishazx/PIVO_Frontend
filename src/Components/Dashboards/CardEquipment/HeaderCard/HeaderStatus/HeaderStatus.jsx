import styles from './HeaderStatus.module.css';
const HeaderStatus = ({ status }) => {
    console.log(status);

    return <div className={`${styles.status} ${status == 'Работает' ? styles.green : status == "Требует обслуживания" ? styles.yellow : styles.red}`}></div>;
};

export default HeaderStatus;
