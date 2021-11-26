import React, { useMemo, useState } from "react";

import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';



const ChartCC = ({ data,name }) => {
    console.log(data)
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

    const maxName = useMemo(() => {
        if (Array.isArray(data)) {
        return Math.max(...data.map(({ score }) => score));
    }
    return 1;
    
    }, [data]);

    datass.sort(function (a, b) {
        if (a.value < b.value) {
            return 1;
        }
        if (a.value > b.value) {
            return -1;
        }
        // a must be equal to b
        return 0;
        });
    

    return (
        <div>
            <br/>
                {/* <h3>{name}님은 {datass[0].argument} & {datass[1].argument}를 가장 중요하게 생각하고 있네요😊  </h3> */}
            <br/>
            <Paper>
                <Chart
                data={datass}
                >
                <ArgumentAxis />
                <ValueAxis />
            
                <BarSeries valueField="value" argumentField="argument" />
                </Chart>
            
            </Paper>
            
        </div>
    );
    }



export default ChartCC;


//<h1>{name}님은 {datass[0].argument} & {datass[1].argument}를 가장 중요하게 생각하고 있네요😊</h1>