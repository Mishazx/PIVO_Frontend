import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";
import HeaderCard from "./HeaderCard/HeaderCard";
import DataLabel from "./DataLabel/DataLabel";
import styles from "./CardEquipment.module.css"

const CardEquipment = () => {
    const data =
        {
            'name': 'оборудование'
        };


    return (
        <Container>
            <div className={styles.header}>
                <HeaderCard>{data.name}</HeaderCard>
            </div>

            <div className={styles.stats}>
                <DataLabel label={"Эффективность"} value={20} />
                <DataLabel label={"Итог"} value={30} />
            </div>

        </Container>
    )
}
export default CardEquipment
