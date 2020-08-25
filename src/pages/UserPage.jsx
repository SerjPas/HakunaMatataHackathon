import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {getUserById} from "../lib/api";
import Card from "react-bootstrap/Card";
import styles from '../css/UserPage.module.css'
import Logo from "../components/Logo";
import Button from "@material-ui/core/Button";


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
        <div className={styles.Wrapper} >
            {userToShow ? (
                <Card className={styles.Card} >
                    <Card.Body className={styles.Body}>
                        <Logo/>
                        <div className={styles.Text}>
                            <Card.Title>{userToShow.user_name}</Card.Title>
                            <Card.Text>
                                Notification by:
                                <div>
                                    <span className={styles.Margin}>Email ( {userToShow.user_email} )</span>
                                    <Button className={styles.Buttons} >Send</Button>
                                </div>
                                <div>
                                    <span className={styles.Margin}>SMS:</span>
                                    <Button className={styles.Buttons}>Send</Button>
                                </div>

                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            ) : ("...loading")}
        </div>

    )
}
export default UserPage