import ContentContainer from "../../Common/ContentContainer/ContentContainer";
import CardEquipment from "../../Dashboards/CardEquipment/CardEquipment";

const data = {
    title: 'Название оборудования',
    status: 'Работает',
    performance: 99,
    electric: 120,
    performanceMetrics: [
        { name: 'Скорость', value: 2.5 },
        { name: 'Позиция', value: 50 },
        { name: 'Температура', value: 25 }
    ],

}

const EquipmentPage = () => {
  return(
      <ContentContainer>
          <CardEquipment title={data.title}/>
      </ContentContainer>
  )
}

export default EquipmentPage;
