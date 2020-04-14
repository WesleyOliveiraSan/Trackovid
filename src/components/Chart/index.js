import React from 'react'

//Dependencies
import PieChart from 'react-minimal-pie-chart'

function Chart({ data, size }) {
    return (
        <PieChart
            animate={true}
            animationDuration={1000}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            data={data}
            label={window.innerWidth <= 425 ? false : true}
            labelPosition={112}
            labelStyle={{
                fontFamily: 'Lato',
                fontSize: '10px'
            }}
            lengthAngle={360}
            lineWidth={20}
            paddingAngle={5}
            radius={50}
            style={{
                height: size
            }}
            viewBoxSize={[
                100,
                100
            ]}
        />
    )
}

export default Chart
