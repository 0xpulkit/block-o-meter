import React from "react";
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'



const MyChart = ({chartData, label, colour}) => {
    console.log(label)
    const data = {
        labels: chartData.map((e) => {
            const date = new Date(e[0]).toLocaleDateString()
            return date;
        }),
        datasets: [
            {
              label: label,
              data: chartData.map((e) => {
                  return e[1];
              }),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }
    console.log(data)
    return(
        <div className="my-chart" style={{
            border: "2px solid black"
        }}>
            <Line data={data} />
        </div>
    )
}

export default MyChart;