import React, { useState, useEffect } from 'react';
import Context from "../context/Context";
import { getFarmers, getWeatherData } from '../lib/api';

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
    <Context.Provider value = {{farmerList: [], weatherData: []}}>
      <Container>
        
      </Container>
    </Context.Provider>
  )
}

export default MainPage;