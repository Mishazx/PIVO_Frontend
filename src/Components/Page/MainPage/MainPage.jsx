import React, { PureComponent, useEffect } from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import ContentContainer from "../../Common/ContentContainer/ContentContainer";
import StoragePieDiagram from "../../Dashboards/StoragePieDiagram/StoragePieDiagram";
import Container from "../../Common/Container/Container";
import LineDiagram from "../../Dashboards/LineDiagram/LineDiagram";
import { compose } from "redux";
import { connect } from "react-redux";
import { requestProduction } from "../../../Providers/Reducers/ProductionReducer";
import {
    getAllData,
    getCharacteristicData,
    getIsFetching,
    getStorageData
} from "../../../Providers/Reducers/ProductionSelector";
import CardProductionLine from "../../Dashboards/CardEquipment/CardProductionLine";
import Preloader from "../../Common/Preloader/Preloader";

const data = [
    {
        name: 'Линия 1',
        uv: 3000,
        pv: 5398,
        amt: 2210,
    },
    {
        name: 'Линия 2',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Линия 3',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Линия 4',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Линия 5',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },

];

const data01 = [
    { name: 'Линия 1', value: 3000 },
    { name: 'Линия 2', value: 2000 },
    { name: 'Линия 3', value: 2780 },
    { name: 'Линия 4', value: 1890 },
    { name: 'Линия 5', value: 2390 },
];

const data02 = [
    { name: 'Линия 1', value: 5398 },
    { name: 'Линия 2', value: 9800 },
    { name: 'Линия 3', value: 3908 },
    { name: 'Линия 4', value: 4800 },
    { name: 'Линия 5', value: 3800 },
];

class TestGrav extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={300}
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={data02} cx={600} cy={500} innerRadius={40} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}

const MainPage = (props) => {
    useEffect(() => {
        props.getAllData();
    }, []);

    console.log('props', props);

    return (
        <ContentContainer>
            {props.isFetching ? <Preloader /> : null}
            {!props.isFetching ?
                <>
                    <StoragePieDiagram />
                    <LineDiagram />

                    {
                        Object.keys(props.characteristic_data).map((key, index) => (
                            <CardProductionLine
                                // key={index}
                                {...props.characteristic_data[key] }
                            />
                        ))
                    }

                    {/*<CardProductionLine />*/}
                    {/*<CardProductionLine />*/}
                    {/*<CardProductionLine />*/}
                    {/*<CardProductionLine />*/}
                    {/*<CardProductionLine />*/}
                    {/*<CardProductionLine />*/}
                </>
                : null}

        </ContentContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        all_data: getAllData(state),
        characteristic_data: getCharacteristicData(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getAllData: requestProduction
        })
)
    (MainPage)

// export default MainPage;
