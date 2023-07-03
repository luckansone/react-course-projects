import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(item=> item.value);
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
        {props.dataPoints.map((item) => (
            <ChartBar
            key={item.label}
            value={item.value}
            maxValue={maxValue}
            label={item.label}
            />
        ))}
        </div>
    );
};

export default Chart;
