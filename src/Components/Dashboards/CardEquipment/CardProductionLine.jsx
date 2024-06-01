import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";
import HeaderCard from "./HeaderCard/HeaderCard";
import DataLabel from "./DataLabel/DataLabel";
import styles from "./CardProductionLine.css"
import ProgressBar from "../../Common/ProgressBar/ProgressBar";

const CardProductionLine = (props) => {
    const status = props.status;

    return (
        <Container>
            <div className={styles.header}>
                <HeaderCard status={status}>{props.production_line__name}</HeaderCard>
            </div>

            <div className={styles.stats}>
                <ProgressBar progress={props.efficiency} />
                <DataLabel label={"Операционные часы"} value={props.operational_hours} />
                <DataLabel label={"Частота технического обслуживания"} value={props.maintenance_frequency} />
                <DataLabel label={"Потребление энергии в кВт·ч"} value={props.energy_consumption} />
                <DataLabel label={"Время простоя в часах в месяц"} value={props.downtime_per_month} />
                <DataLabel label={"Количество сотрудников"} value={props.staff_required} />
            </div>

        </Container>
    )
}
export default CardProductionLine
