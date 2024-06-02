import ContentContainer from "../../Common/ContentContainer/ContentContainer";
import CardEquipment from "../../Dashboards/CardEquipment/CardEquipment";

const data = {
    title: 'Название оборудования Название оборудования Название оборудования Название оборудования'
}

const EquipmentPage = () => {
  return(
      <ContentContainer>
          <CardEquipment title={data.title}/>
      </ContentContainer>
  )
}

export default EquipmentPage;
