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
        "Money",
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
            <div>
                {
                (Array.isArray(datass) > 0 && datass.length > 2)
                ?<h4><b>{name}님!</b><br/> <b>{datass[0].argument} & {datass[1].argument}</b>의 가치를 <br/>가장 중요하게 생각하고 있네요😊</h4> :" "  }
            </div>
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


