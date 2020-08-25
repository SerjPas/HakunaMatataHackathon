import React from 'react';
import MainPage from './pages/MainPage';
import AppNavbar from './components/AppNavbar';
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import UserCard from "./UserCard";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import UserCard from './pages/UserCard';


function App() {
  return (
    <Router>
      <AppNavbar />
      <Container fluid>
        <MainPage />
      </Container>
      <Switch>
        <Route exact path="/registration">
          <Regisration />  
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />  
        </Route>
        <Route exact path="/usercard">
          <UserCard />  
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
