import React, {useState} from "react";
import {useParams} from 'react-router-dom'
import {getUserByEmail} from "../lib/api";

const UserPage = () => {
    const [userToShow, setUserToShow] = useState(null);
    let params = useParams();
    console.log(params)

    const getUserFromDB = () => {
        console.log(params.email);
        getUserByEmail(params.email).then(user => setUserToShow(user))
            .catch(error => console.log(error))
    }
    return(
        <div>
            userPage
        </div>
    )
}
export default UserPage