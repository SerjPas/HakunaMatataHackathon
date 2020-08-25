import React, {useEffect, useState} from "react";
import MainPage from "./pages/MainPage";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "../src/pages/Dashboard";


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Registration from "./pages/Registration";
import UserTableContext from "./context/UserTableContext";
import {getFarmers} from "./lib/api";
import UserPage from "./pages/UserPage";

function App() {
    const [userTable, setUserTable] = useState([]);

    const handleGetUsers = () => {
        getFarmers().then((response) => {
            console.log("response", response.data);
            handleUserTable(response.data);
        });
    };

    useEffect(() => {
        handleGetUsers();
    }, []);

    function handleUserTable(userTable) {
        setUserTable(userTable);
    }

    function handleDeleteUser(id) {
        setUserTable(userTable.filter(item => item.id !== id));
    }

    return (
        <Router>
            <UserTableContext.Provider
                value={{userTable, handleUserTable, handleDeleteUser}}
            >
                <AppNavbar/>
                <Switch>
                    <Route exact path={"/"} component={MainPage}/>
                    <Route exact path="/user/:id" component={UserPage}/>
                    <Route exact path="/registration" component={Registration}/>
                    {userTable.length > 0 ? (
                        <Route exact path="/dashboard" component={Dashboard}/>
                    ) : (
                        <div>loading...</div>
                    )}
                </Switch>
            </UserTableContext.Provider>
        </Router>
    );
}

export default App;
