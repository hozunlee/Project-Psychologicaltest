import React, { useMemo, useState } from "react";

import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


const ChartCC = ({ data,name }) => {
    const [datas, setDatas] = useState({
        argument: "",
        value: ""
    })

    const interpretationNames = [
        "능력발휘",
        "자율성",
        "보수",
        "안정성",
        "사회적 인정",
        "사회봉사",
        "자기계발",
        "창의성",
    ];

    let datass =
        data.map((value) => {
            let newData = {};
            newData['argument']= interpretationNames[value?.seq - 1];
            newData['value']= value?.score;
            return newData;
            ;
        });
    console.log(datass)


    
    const maxScore = useMemo(() => {
        if (Array.isArray(data)) {
        return Math.max(...data.map(({ score }) => score));
    }
    return 1;
    
    }, [data]);


    return (

        <Paper>
            <Chart
            data={datass}
            >
            <ArgumentAxis />
            <ValueAxis />
        
            <BarSeries valueField="value" argumentField="argument" />
            </Chart>
            <h1>{name}님은 {maxScore}를 가장 중요하게 생각하고 있네요😊</h1>
        </Paper>
    );
    }



export default ChartCC;
