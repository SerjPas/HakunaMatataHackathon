import React, {useContext, useState} from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {deleteUserById} from "../lib/api";
import UserTableContext from "../context/UserTableContext";
import styles from '../css/UserCard.module.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import ConfirmDialog from "../components/ConfirmDialog";


const UserCard = (props) => {
    const userTableContext = useContext(UserTableContext)
    const [error, setError] = useState("");
    const [confirmOpen, setConfirmOpen] = useState(false)

    const {user} = props;

    const handleDeleteUser = (id) => {
        setError('');
        deleteUserById(id)
            .then(response => {
                userTableContext.handleDeleteUser(response.deleted)
                console.log(response.deleted)
                console.log(userTableContext.userTable)
            })
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
                <Link to={`/edit/${user.user_id}`}
                      size="small" color="primary" className={styles.Link}>
                    <EditIcon/>
                </Link>
                <div>
                    <IconButton aria-label="delete" onClick={() => setConfirmOpen(true)}>
                        <DeleteIcon/>
                    </IconButton>
                    <ConfirmDialog
                        title="Delete this Student?"
                        open={confirmOpen}
                        setOpen={setConfirmOpen}
                        onConfirm={handleDeleteUser}
                        user={user}
                    >
                        Are you sure you want to delete this user?
                    </ConfirmDialog>
                </div>
            </Card.Body>
            {error && <span className={styles.Error}>{error}</span>}
        </Card>
    );
};
export default UserCard;
