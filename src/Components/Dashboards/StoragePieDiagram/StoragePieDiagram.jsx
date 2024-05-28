import React, {PureComponent} from 'react';
import {PieChart, Pie, Cell, Legend, Tooltip} from 'recharts';
import {compose} from "redux";
import {connect} from "react-redux";
import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";
import {getStorageData} from "../../../Providers/Reducers/ProductionSelector";
import styles from './StoragePieDiagram.module.css'


const COLORS = ['#FFC107', '#0088FE', '#8BC34A', '#FF69B4', '#9C9C9C'];

class Diagram extends PureComponent {
    render() {
        console.log(this.props.data)
        return (

            <PieChart
                width={250} height={250}
                // onMouseEnter={this.onPieEnter}
            >
                <Pie
                    data={this.props.data}
                    innerRadius={50}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={5}
                    // dataKey="value"
                    nameKey="name"
                    dataKey="count"
                    label
                >
                    {this.props.data && this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip/>
                <Legend/>
                </PieChart>

        );
    }
}


const StoragePieDiagram = (props) => {
    return (
        <Container>
            <div className={styles.diagramContainer}>

                <Text>Склад №1</Text>

                <div className={styles.centeredDiv}>
                    <Diagram data={props.data}/>
                </div>

            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        data: getStorageData(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {}
    )
)
(StoragePieDiagram)
