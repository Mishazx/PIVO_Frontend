import styles from './JournalLog.module.css'
import {useTheme} from "../../../Providers/ThemeContext";

const JournalLog = ({data}) => {
    const theme = useTheme();
    console.log(data);
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th className={`${styles.th} ${styles[theme]}`}>Линия производства</th>
                <th className={`${styles.th} ${styles[theme]}`}>Тип события</th>
                <th className={`${styles.th} ${styles[theme]}`}>Дата события</th>
                <th className={`${styles.th} ${styles[theme]}`}>Описание</th>
            </tr>
            </thead>
            <tbody>
            {data.map((data) => (
                <tr key={data.id} className={styles.tr}>
                    <td className={`${styles.td} ${styles[theme]}`}>{data.production_line__name}</td>
                    <td className={`${styles.td} ${styles[theme]}`}>{data.event_type}</td>
                    <td className={`${styles.td} ${styles[theme]}`}>{data.event_date}</td>
                    <td className={`${styles.td} ${styles[theme]}`}>{data.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default JournalLog;
