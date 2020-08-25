import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

// get a list of farmers
export async function getFarmers() {
  return await axios.get(`${baseUrl}/api/list`);
}

// get weather data
export async function getWeatherData() {
  return await axios.get(`${baseUrl}/api/weather/get`)
}

// add a farmer
export async function addFarmer(farmer) {
  return await axios.post(`${baseUrl}/api/register`, farmer);
}

// edit farmer
export async function editFarmer(farmer) {
  return await axios.post(`${baseUrl}/api/farmer`, farmer)
}

// delete farmer
export async function deleteFarmer(farmer) {
  return await axios.post(`${baseUrl}/api/farmer`, farmer)
}
