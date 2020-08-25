import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {getUserById} from "../lib/api";
import Card from "react-bootstrap/Card";


const UserPage = () => {
    const [userToShow, setUserToShow] = useState(null);
    let params = useParams();

    const getUserFromDB = () => {
        getUserById(params.id).then(user => {
            console.log(user)
            setUserToShow(user)
        })
            .catch(error => console.log(error))

    }

    useEffect(() => getUserFromDB(), [])

    return (
        <>
            {userToShow ? (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>{userToShow.user_name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : ("...loading")}
        </>

    )
}
export default UserPage