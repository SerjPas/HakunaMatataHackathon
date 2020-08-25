import React, {useEffect, useState} from "react";
import {getWeatherData} from "../lib/api";
import {Bar, Line, Pie, Scatter} from "react-chartjs-2";
import styles from '../css/Chart.module.css'


const Chart = () => {
    const [chartData, setChartData] = useState({});

    const chart = (object) => {
        const keys = Object.keys(object);
        const values = Object.values(object);

        setChartData({
            labels: keys,
            datasets: [{
                label: "Temperature C",
                data: values,
                backgroundColor: [
                    // "#3726A6",
                    // "#F2E635",
                    "#F2BE22",
                    // "#F20505",
                    // "#4A44F2",
                    // "#f43367",

                ],
                borderColor: ['rgba(243, 99, 27, .7)',],
                borderWidth: 2
            }]
        })
    }

    const handleGetWeatherData = () => {
        getWeatherData().then(response => {
            console.log(response.data)
            chart(response.data);
        })
    }

    useEffect(() => handleGetWeatherData(), [])

    return (
        <div className={styles.Chart}>
            <Line data={chartData} options={{responsive: true}} width={300}/>
        </div>
    )
}
export default Chart