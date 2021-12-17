import React from "react";
import { Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto'



const Mybar = ({barData, label}) => {
    console.log(barData)
    const days = []
    for(let i=-28; i<0; i++){
        days.push(i)
    }
    const data = {
        labels: days,
        datasets: [
            {
              label: label,
              data: barData,
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
            <Bar data={data} />
        </div>
    )
}

export default Mybar;