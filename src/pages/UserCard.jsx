import React from "react";
import Card from "react-bootstrap/Card";

const UserCard = (props) => {
    const handleDeleteStudent = (email) => {
        // deleteStudent(email)
        //     .then(response => schoolTableContext.handleDeleteStudent(response.deleted))
        //     .catch(error => {
        //         setError(error.message);
        //     });
    }

    return (
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{props.user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#" onClick={handleDeleteStudent(props.user.email)}>Delete</Card.Link>
                </Card.Body>
            </Card>
    )
}
export default UserCard