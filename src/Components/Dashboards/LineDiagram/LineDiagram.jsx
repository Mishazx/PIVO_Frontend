import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";
import {getPerformanceData} from "../../../Providers/Reducers/ProductionSelector";
import {compose} from "redux";
import {connect} from "react-redux";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        hv: 3200,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        hv: 1800,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

class Diagram extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    render() {
        // const groupedData = {};
        // data.forEach(item => {
        //     if (!groupedData[item.production_line]) {
        //         groupedData[item.production_line] = [];
        //     }
        //     groupedData[item.production_line].push({
        //         name: item.timestamp,
        //         pv: parseFloat(item.performance)
        //     });
        // });
        console.log('LD', this.props.data)

        return (
            <ResponsiveContainer
                width={450}
                height={250}
            >
                <LineChart
                    // width={300}
                    // height={300}
                    data={this.props.data}
                    margin={{
                        // top: 5,
                        right: 30,
                        // left: 20,
                        // bottom: 5,
                    }}
                >
                    {/*<CartesianGrid strokeDasharray="3 3" />*/}
                    {/*<XAxis dataKey="timestamp" />*/}
                    <XAxis
                        dataKey="timestamp"
                        tickFormatter={(tick) => new Date(tick).toLocaleTimeString().slice(0, 5)}
                        // tickFormatter={(tick) => tick.format('YYYY-MM-DD HH:mm')}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name={'Лдп лагера'} dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" name={'Лдп эля'} dataKey="hv" stroke="#911c23" />
                    <Line type="monotone" name={'Лдп специальных пив'} dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}


const LineDiagram = (props) => {
    console.log(props);
    return (
        <Container>
            <Text>Эффективность линий производств</Text>
            <Diagram data={props.data}/>
            <Text>* Лдп - Линия для производства</Text>
        </Container>

    )
}

const mapStateToProps = (state) => {
    return {
        data: getPerformanceData(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {

        })
)
(LineDiagram)


// export default LineDiagram;
