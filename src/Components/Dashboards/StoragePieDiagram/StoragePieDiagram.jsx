import React, {PureComponent} from 'react';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip} from 'recharts';
import {getStoragePieDiagram} from "../../../Providers/Reducers/ProductionSelector";
import {compose} from "redux";
import {connect} from "react-redux";
import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";


const COLORS = ['#FFC107', '#0088FE', '#8BC34A', '#FF69B4', '#9C9C9C'];

class Diagram extends PureComponent {
    render() {
        console.log(this.props.data)
        return (
            <PieChart
                width={250} height={250}
                onMouseEnter={this.onPieEnter}>
                <Pie
                    data={this.props.data}
                    innerRadius={50}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={5}
                    // dataKey="value"
                    nameKey="name"
                    valueKey="value"
                    label
                >
                    {this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip />
                <Legend />

            </PieChart>
        );
    }
}


const StoragePieDiagram = (props) => {
    return (
        <Container>
            <Text>Склад №1</Text>
            <Diagram data={props.data_storage_pie_diagram}/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        data_storage_pie_diagram: getStoragePieDiagram(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {}
    )
)
(StoragePieDiagram)
// export default StoragePieDiagram;
