import React, {useContext, useState} from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {deleteUserById} from "../lib/api";
import UserTableContext from "../context/UserTableContext";
import styles from '../css/UserCard.module.css'
import Button from "react-bootstrap/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const UserCard = (props) => {
    const userTableContext = useContext(UserTableContext)
    const [error, setError] = useState("");

    const {user} = props;

    const handleDeleteUser = () => {
        deleteUserById(user.user_id)
            .then(() => userTableContext.handleDeleteUser(user.user_id))
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <Card className={styles.Card}>
            <Card.Body>
                <Card.Title>
                    <Link to={`/user/${user.user_id}`}>
                        {user.user_name}
                    </Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {user.user_email}
                </Card.Subtitle>
                <Card.Text>
                    {user.user_phone}
                </Card.Text>
                <EditIcon/>
                <DeleteIcon
                    className={styles.ButtonDelete}
                    onClick={handleDeleteUser}/>
            </Card.Body>
            {error && <span className={styles.Error}>{error}</span>}
        </Card>
    );
};
export default UserCard;
