import styles from './JournalLog.module.css'
import {useTheme} from "../../../Providers/ThemeContext";
import {useState} from "react";



// const JournalLog = ({data}) => {
//     const theme = useTheme();
//     console.log(data);
//     return (
//         <table className={styles.table}>
//
//             <thead>
//             <tr>
//                 <th className={`${styles.th} ${styles[theme]}`}>Линия производства</th>
//                 <th className={`${styles.th} ${styles[theme]}`}>Тип события</th>
//                 <th className={`${styles.th} ${styles[theme]}`}>Дата события</th>
//                 <th className={`${styles.th} ${styles[theme]}`}>Описание</th>
//             </tr>
//             </thead>
//
//             <tbody>
//             {data.map((data) => (
//                 <tr key={data.id} className={styles.tr}>
//                     <td className={`${styles.td} ${styles[theme]}`}>{data.production_line__name}</td>
//                     <td className={`${styles.td} ${styles[theme]}`}>{data.event_type}</td>
//                     <td className={`${styles.td} ${styles[theme]}`}>{data.event_date}</td>
//                     <td className={`${styles.td} ${styles[theme]}`}>{data.description}</td>
//                 </tr>
//             ))}
//             </tbody>
//
//         </table>
//     )
// }

const JournalLog = ({ data }) => {
    const theme = useTheme();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div>
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
                {currentItems.map((item) => (
                    <tr key={item.id} className={styles.tr}>
                        <td className={`${styles.td} ${styles[theme]}`}>{item.production_line__name}</td>
                        <td className={`${styles.td} ${styles[theme]}`}>{item.event_type}</td>
                        <td className={`${styles.td} ${styles[theme]}`}>{item.event_date}</td>
                        <td className={`${styles.td} ${styles[theme]}`}>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                {Array(Math.ceil(data.length / itemsPerPage))
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i + 1}
                            onClick={() => onPageChange(i + 1)}
                            // className={i + 1 === currentPage? `${styles.active}` : `${styles.passive}`}
                            className={` ${styles.pageNum}
                            ${i + 1 === currentPage? styles.active : styles.passive} 
                            ${styles[theme]}
                            `}
                        >
                            {i + 1}
                        </div>

                    ))}
            </div>
        </div>
    );
};

export default JournalLog;


// import styles from './JournalLog.module.css';
// import { useTheme } from "../../../Providers/ThemeContext";
// import {useEffect, useState} from "react";
// const JournalLog = ({ data, isLoading, pagination }) => {
//     const theme = useTheme();
//     const [rows, setRows] = useState(Array(10).fill({}));
//     useEffect(() => {
//         if (!isLoading && data) {
//             setRows(data);
//         }
//     }, [data, isLoading]);
//     return (
//         <table className={styles.table}>
//             <thead>
//             <tr>
//                 <th className={`${styles.th} ${styles[theme]}`}>Линия производства</th>
//                 <th className={`${styles.th} ${styles[theme]}`}>Тип события</th>
//                 <th className={`${styles.th} ${styles[theme]}`}>Дата события</th>
//                 <th className={`${styles.th} ${styles[theme]}`}>Описание</th>
//             </tr>
//             </thead>
//             <tbody>
//             {rows.map((row, index) => (
//                 <tr key={index} className={styles.tr}>
//                     <td className={`${styles.td} ${styles[theme]}`}>
//                         {row.production_line__name || ""}
//                     </td>
//                     <td className={`${styles.td} ${styles[theme]}`}>
//                         {row.event_type || ""}
//                     </td>
//                     <td className={`${styles.td} ${styles[theme]}`}>
//                         {row.event_date || ""}
//                     </td>
//                     <td className={`${styles.td} ${styles[theme]}`}>
//                         {row.description || ""}
//                     </td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     );
// };
// export default JournalLog;
