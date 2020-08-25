import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// get a list of farmers
export async function getFarmers() {
  return await axios.get(`${baseUrl}/api/list`);
}

export async function getUserById(id) {
  return axios.get(`${baseUrl}/api/${id}`).then((response) => {
    console.log(response, 'respo')
    return response.data;
  });
}

export async function deleteUserById(id) {
  const httpReqHeaders = {Authorization: id}
  const axiosConfigObject = {headers: httpReqHeaders, data: {id: id}};
  return axios.delete(`${baseUrl}/api/delete`, axiosConfigObject).then(response => {
    return response.data;
  });
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

