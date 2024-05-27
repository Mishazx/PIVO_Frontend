import EmployeeCard from "../../Dashboards/CardEmployee/CardEmployee";
import ContentContainer from "../../Common/ContentContainer/ContentContainer";

const EmployeePage = () => {
  return(
      <ContentContainer>
        <EmployeeCard
            image={require('../../../assets/person/1.jpg')}
            fullName={'Иванов Иван Сергеевич'}
            position={'Стажер'}
            accessLevel={'Производство пива'}
        />        <EmployeeCard
            image={require('../../../assets/person/1.jpg')}
            fullName={'Иванов Иван Сергеевич'}
            position={'Стажер'}
            accessLevel={'Производство пива'}
        />        <EmployeeCard
            image={require('../../../assets/person/1.jpg')}
            fullName={'Иванов Иван Сергеевич'}
            position={'Стажер'}
            accessLevel={'Производство пива'}
        />        <EmployeeCard
            image={require('../../../assets/person/1.jpg')}
            fullName={'Иванов Иван Сергеевич'}
            position={'Стажер'}
            accessLevel={'Производство пива'}
        />        <EmployeeCard
            image={require('../../../assets/person/1.jpg')}
            fullName={'Иванов Иван Сергеевич'}
            position={'Стажер'}
            accessLevel={'Производство пива'}
        />        <EmployeeCard
            image={require('../../../assets/person/1.jpg')}
            fullName={'Иванов Иван Сергеевич'}
            position={'Стажер'}
            accessLevel={'Производство пива'}
        />
      </ContentContainer>
  )
}

export default EmployeePage;
