import React, {PureComponent} from "react";
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
            // <ResponsiveContainer width="100%" height="100%">
            //     <LineChart
            //         width={500}
            //         height={300}
            //         data={data}
            //         margin={{
            //             top: 5,
            //             right: 30,
            //             left: 20,
            //             bottom: 5,
            //         }}
            //     >
            //         <CartesianGrid strokeDasharray="3 3"/>
            //         <XAxis dataKey="name"/>
            //         <YAxis/>
            //         <Tooltip/>
            //         {/*<Legend/>
            //         */}
            //         <Legend formatter={(value) => {
            //             if (value === "uv") return "Производительность до обслуживания";
            //             if (value === "pv") return "Производительность после обслуживания";
            //             return value;
            //         }}/>
            //         <Line type="monotone" dataKey="uv" stroke="#294294"/>
            //         <Line type="monotone" dataKey="pv" stroke="#ff9900" activeDot={{r: 8}}/>
            //     </LineChart>
            // </ResponsiveContainer>
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

const MainPage = () => {
    const data = [
        {name: 'Group A', value: 400},
        {name: 'Group B', value: 300},
        {name: 'Group C', value: 300},
        {name: 'Group D', value: 200},
    ];
    return(
        <ContentContainer>
            <StoragePieDiagram data={data}/>
            <LineDiagram />
            {/*<StoragePieDiagram data={data}/>*/}
            {/*<StoragePieDiagram data={data}/>*/}
            {/*<StoragePieDiagram data={data}/>*/}
            {/*<StoragePieDiagram data={data}/>*/}

        </ContentContainer>
        //     <Container>
        //
        //     </Container>
        // </ContentContainer>
    )
}

export default MainPage;
