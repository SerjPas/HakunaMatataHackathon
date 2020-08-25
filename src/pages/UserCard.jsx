import React, {useContext, useState} from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {deleteUserById} from "../lib/api";
import UserTableContext from "../context/UserTableContext";

const UserCard = (props) => {
    const userTableContext = useContext(UserTableContext)
    const [error, setError] = useState("");

    const {user} = props;
    const handleDeleteStudent = (id) => {
        deleteUserById(id)
            .then(response => userTableContext.handleDeleteUser(response.deleted))
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <Card style={{width: "18rem"}}>
            <Card.Body>
                <Card.Title>
                    <Link to={`/user/${user.user_id}`}>{user.user_name}</Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {user.user_email}
                </Card.Subtitle>
                <Card.Text>
                    {user.user_phone}
                </Card.Text>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link
                    href="#"
                    onClick={handleDeleteStudent(user.user_email)}
                >
                    Delete
                </Card.Link>
            </Card.Body>
            {error && <span className={"error"} color="secondary">{error}</span>}
        </Card>
    );
};
export default UserCard;
