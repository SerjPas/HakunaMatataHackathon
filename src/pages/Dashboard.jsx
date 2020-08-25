import React, {useContext, useState} from "react";
import UserTableContext from "../context/UserTableContext";
import ItemsCarousel from 'react-items-carousel';
import UserCard from "./UserCard";
import Container from "react-bootstrap/Container";
import styles from "../css/Dashboard.module.css"
import {Link} from "react-router-dom";


const Dashboard = () => {
    const userTableContext = useContext(UserTableContext)
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <Container className={styles.Container}>
            <div style={{padding: `0 ${chevronWidth}px`}}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {userTableContext.userTable.map(user => (
                            <UserCard key={user.user_id} user={user}/>
                    ))}
                </ItemsCarousel>
            </div>
            <Link to={"/registration"} className={styles.Button}>Add User</Link>
        </Container>
    )
}
export default Dashboard