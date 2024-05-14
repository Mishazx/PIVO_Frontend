import styles from './JournalLog.module.css'
import {useTheme} from "../../../Providers/ThemeContext";

const JournalLog = ({events}) => {
    const theme = useTheme();
    console.log(events);
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
            {events.map((event) => (
                <tr key={event.id} className={styles.tr}>
                    <td className={`${styles.td} ${styles[theme]}`}>{event.production_line__name}</td>
                    <td className={`${styles.td} ${styles[theme]}`}>{event.event_type}</td>
                    <td className={`${styles.td} ${styles[theme]}`}>{event.event_date}</td>
                    <td className={`${styles.td} ${styles[theme]}`}>{event.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default JournalLog;
