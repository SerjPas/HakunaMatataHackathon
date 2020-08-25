import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

// get a list of farmers
export async function getFarmers() {
  const response = await axios.get(`${baseUrl}/api/list`);
  return response;
}

// get weather data
export async function getWeatherData() {
  const response = await axios.get(`${baseUrl}/api/weather/get`);
  return response
}

// add a farmer
export async function addFarmer(farmer) {
  const response = await axios.post(`${baseUrl}/api/register`, farmer);
  return response;
}

// edit farmer
export async function editFarmer(farmer) {
  const response = await axios.post(`${baseUrl}/api/farmer`, farmer);
  return response
}

// delete farmer
export async function deleteFarmer(farmer) {
  const response = await axios.post(`${baseUrl}/api/farmer`, farmer);
  return response
}
