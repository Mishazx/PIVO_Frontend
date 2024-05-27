import React from 'react';
import styles from './CardEmployee.module.css';
import {useTheme} from "../../../Providers/ThemeContext";
import Container from "../../Common/Container/Container";

const EmployeeCard = ({ image, fullName, position, accessLevel }) => {
    const theme = useTheme();
    return (

        // <div className={styles.employeeCard}>?
        <Container>
            <img src={image} alt={`${fullName}'s photo`} className={styles.employeeCard__image} />
            <div className={styles.employeeCard__info}>
                <h2 className={`${styles.employeeCard__name} ${styles[theme]}`}>{fullName}</h2>
                <p className={styles.employeeCard__position}>{position}</p>

                <p className={`${styles.employeeCard__accessLevel} ${styles[theme]}`}>
                    {accessLevel}
                </p>
            </div>
    </Container>
        //</div>
    );
};



export default EmployeeCard;
