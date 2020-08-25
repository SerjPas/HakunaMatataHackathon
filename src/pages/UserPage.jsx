import React, {useState} from "react";
import {useParams} from 'react-router-dom'
import { getUserById} from "../lib/api";
import Card from "react-bootstrap/Card";



const UserPage = () => {
    const [userToShow, setUserToShow] = useState(null);
    let params = useParams();
    console.log(params)

    const getUserFromDB = () => {
        console.log(params.id);
        getUserById(params.id).then(user => setUserToShow(user))
            .catch(error => console.log(error))

    }
    return(
        <>
            {userToShow ? (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
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