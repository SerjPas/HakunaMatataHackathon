import React, {useState, useEffect} from 'react';
import {getFarmers, getWeatherData} from '../lib/api';
import UserTableContext from "../context/UserTableContext";

import Container from 'react-bootstrap/Container';
import Dashboard from "./Dashboard";



const MainPage = () => {

    const [weatherData, setWeatherData] = useState([]);


    //
    // useEffect(() => {
    //     getFarmers()
    //         .then(response => {
    //             console.log(response.data)
    //             setUserTable(response.data)
    //         });
    //
    //     getWeatherData()
    //         .then(response => {
    //             console.log(response.data)
    //             setWeatherData(response.data)
    //         })
    // }, []);
    //

    return (
       <div>hello</div>
    )
}

export default MainPage;