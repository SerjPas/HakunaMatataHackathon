import React, {useContext, useState} from "react";
import UserTableContext from "../context/UserTableContext";
import ItemsCarousel from 'react-items-carousel';
import Container from "react-bootstrap/Container";
import styles from "../css/Dashboard.module.css"
import {Link} from "react-router-dom";
import Chart from "../components/Chart";
import UserCard from "./UserCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Dashboard = () => {
    const userTableContext = useContext(UserTableContext)
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div>
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
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs={"auto"}  md="auto" lg="auto">
                                        <UserCard key={user.user_id} user={user}/>
                                    </Col>
                                </Row>
                            </Container>
                        ))}
                    </ItemsCarousel>
                </div>
                <Link to={"/registration"} className={styles.Button}>Add User</Link>
            </Container>
            <Chart/>
        </div>
    )
}
export default Dashboard