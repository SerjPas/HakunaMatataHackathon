import React, { useState, useEffect } from 'react';
import Context from "../context/Context";
import { getFarmers, getWeatherData } from '../lib/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';


const MainPage = () => {
  const [ farmerList, setFarmerList ] = useState([]);
  const [ weatherData, setWeatherData ] = useState([]);

  useEffect(() => {
    getFarmers()
      .then(response => {
        console.log(response.data)
        setFarmerList(response.data)
      });
    
    getWeatherData()
      .then(response => {
        console.log(response.data)
        setWeatherData(response.data)
      })  
  }, []);



  return (
    <Router>
      <Context.Provider value = {}>
        <Container>
          
        </Container>
      </Context.Provider>
    </Router>

  )

}