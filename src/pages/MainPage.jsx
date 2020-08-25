import React, {useState, useEffect} from 'react';
import Context from "../context/Context";
import {getFarmers, getWeatherData} from '../lib/api';
import UserTableContext from "../context/UserTableContext";

import Container from 'react-bootstrap/Container';

let mockUsers = [{
    name: "bob1",
    email: "email1@email.com",
}, {
    name: "bob2",
    email: "email2@email.com",
}, {
    name: "bob3",
    email: "email3@email.com",
}, {
    name: "bob4",
    email: "email4@email.com",
}, {
    name: "bob5",
    email: "email5@email.com",
}, {
    name: "bob6",
    email: "email6@email.com",
}]

const MainPage = () => {
    const [userTable, setUserTable] = useState(mockUsers);
    const [weatherData, setWeatherData] = useState([]);

    function handleUserTable(userTable) {
        setUserTable(userTable);
    }

    function handleDeleteUser() {

    }


    useEffect(() => {
        getFarmers()
            .then(response => {
                console.log(response.data)
                setUserTable(response.data)
            });

        getWeatherData()
            .then(response => {
                console.log(response.data)
                setWeatherData(response.data)
            })
    }, []);


    return (
        <UserTableContext.Provider value={{userTable, handleUserTable, handleDeleteUser}}>
            <Container>

            </Container>
        </UserTableContext.Provider>
    )
}

export default MainPage;