import React from 'react';
import styles from './DataLabel.module.css'
import {useTheme} from "../../../../Providers/ThemeContext";

const DataLabel = ({ label, value }) => {
    const theme = useTheme();
    return (
        <div className={`${styles.data_label} ${styles[theme]}`}>
            <div className={styles.label}>{label}:</div>
            <div className={styles.value}>{value}</div>
        </div>
    );
};
export default DataLabel;
