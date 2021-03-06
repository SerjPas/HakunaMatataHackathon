import axios from "axios";

// const baseUrl = "http://localhost:5000";
// const baseUrl = "https://python-flask-hakuna-server.herokuapp.com/";
const baseUrl = "https://python-flask-hakuna-server.herokuapp.com/";

// get a list of farmers
export async function getFarmers() {
    return await axios.get(`${baseUrl}/api/list`);
}

export async function getUserById(id) {
    return axios.get(`${baseUrl}/api/${id}`).then((response) => {
        console.log(response, "respo");
        return response.data;
    });
}

export async function deleteUserById(id) {
    return axios.get(`${baseUrl}/api/delete/${id}`).then(response => {
        return response.data;
    });
}

// get weather data
export async function getWeatherData() {
    return axios.get(`https://hakuna-matata-weather.herokuapp.com/predict_7_days`).then(response => {
        console.log(response, 'weather')
        return response;
    })
}

// get weather data
export async function sendWeatherData() {
    return await axios.get(`${baseUrl}/api/weather/send`);
}

// add a farmer
export async function addFarmer(farmer) {
    return await axios.post(`${baseUrl}/api/register`, farmer);
}

// edit farmer
export async function editFarmer(farmer) {
    return await axios.post(`${baseUrl}/api/farmer`, farmer);
}
