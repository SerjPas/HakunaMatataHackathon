import React, {useEffect, useState} from "react";
import {getWeatherData} from "../lib/api";
import {Pie} from "react-chartjs-2";


const Chart = () => {
    const [chartData, setChartData] = useState({});

    const chart = (object) => {
        const keys = Object.keys(object);
        const values = Object.values(object);

        setChartData({
            labels: keys,
            datasets: [{
                label: "skills",
                data: values,
                backgroundColor: [
                    "#3726A6",
                    "#F2E635",
                    "#F2BE22",
                    "#F20505",
                    "#4A44F2",
                    "#f43367",

                ],
                borderColor: ['rgba(200, 99, 132, .7)',],
                borderWidth: 2
            }]
        })
    }

    const handleGetWeatherData = () => {
        getWeatherData().then(response => {
            console.log(response.data)
            // chart(response.data);
        })
    }

    useEffect(() => handleGetWeatherData(), [])

    return (
        <div>
            <Pie data={chartData} options={{responsive: true}} width={300}/>
        </div>
    )
}
export default Chart