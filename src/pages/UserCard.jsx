import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import UserPage from "./UserPage";

const UserCard = (props) => {
    const handleDeleteStudent = (email) => {
        // deleteStudent(email)
        //     .then(response => schoolTableContext.handleDeleteStudent(response.deleted))
        //     .catch(error => {
        //         setError(error.message);
        //     });
    };

    return (
        <Card style={{width: "18rem"}}>
            <Card.Body>
                <Card.Title>
                    <Link to={`/user/${props.user._email}`}>{props.user.user_name}</Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.user.user_email}
                </Card.Subtitle>
                <Card.Text>
                    {props.user.user_phone}
                </Card.Text>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link
                    href="#"
                    onClick={handleDeleteStudent(props.user.user_email)}
                >
                    Delete
                </Card.Link>
            </Card.Body>
        </Card>
    );
};
export default UserCard;
