import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";

const CardEquipment = ({title}) => {
    return(
      <Container>
          <Text style={{maxWidth: '200px'}}>{title}</Text>
          <div>

          </div>
      </Container>
    );
}

export default CardEquipment;
