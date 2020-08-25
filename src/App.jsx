import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "../src/pages/Dashboard";
import UserCard from "../src/pages/UserCard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Registration from "./pages/Registration";
import UserTableContext from "./context/UserTableContext";
import { getFarmers } from "./lib/api";
import UserPage from "./pages/UserPage";

// let mockUsers = [{
//     name: "bob1",
//     email: "email1@email.com",
// }, {
//     name: "bob2",
//     email: "email2@email.com",
// }, {
//     name: "bob3",
//     email: "email3@email.com",
// }, {
//     name: "bob4",
//     email: "email4@email.com",
// }, {
//     name: "bob5",
//     email: "email5@email.com",
// }, {
//     name: "bob6",
//     email: "email6@email.com",
// }]

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

  function handleDeleteUser() {}

  return (
    <Router>
      <UserTableContext.Provider
        value={{ userTable, handleUserTable, handleDeleteUser }}
      >
        <AppNavbar />
        <Switch>
          <Route exact path={"/"} component={MainPage} />
          <Route exact path="/user/:email" component={UserPage} />
          <Route exact path="/registration" component={Registration} />
          {userTable.length > 0 ? (
            <Route exact path="/dashboard" component={Dashboard} />
          ) : (
            <div>loading...</div>
          )}
        </Switch>
      </UserTableContext.Provider>
    </Router>
  );
}

export default App;
