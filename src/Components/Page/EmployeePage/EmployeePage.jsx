import EmployeeCard from "../../Dashboards/CardEmployee/CardEmployee";
import ContentContainer from "../../Common/ContentContainer/ContentContainer";
import { requestEmployees } from "../../../Providers/Reducers/EmployeeReducer";
import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getEmployees } from "../../../Providers/Reducers/EmployeeSelector";

const EmployeePage = (props) => {
    useEffect(() => {
        props.getEmployees();
    }, []);



    console.log('props', props);

    return (
        <ContentContainer>
            {/* {Object.values(props.employees).map((employee, index) => (
                <EmployeeCard 
                    image={employee.image}
                    fullName={employee.fullName}
                    position={employee.position}
                    accessLevel={employee.accessLevel}
                />
            ))} */}

{props.employees && Object.values(props.employees).map((employee, index) => (
    <EmployeeCard 
        image={employee.photo}
        fullName={employee.full_name}
        position={employee.position}
        accessLevel={employee.production_line}
    />
))}

            {/* <EmployeeCard
                image={require('../../../assets/person/1.jpg')}
                fullName={'Иванов Иван Сергеевич'}
                position={'Стажер'}
                accessLevel={'Производство пива'}
            /> */}
        </ContentContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        employees: getEmployees(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        getEmployees: requestEmployees
    })
)
    (EmployeePage)

// export default EmployeePage;
