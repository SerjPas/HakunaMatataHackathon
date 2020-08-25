import React from 'react';
import MainPage from './pages/MainPage';
import AppNavbar from './components/AppNavbar';
import Dashboard from "../src/pages/Dashboard";
import UserCard from "../src/pages/UserCard";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Registration from "./pages/Registration";



function App() {
  return (
    <Router>
      <AppNavbar />
      <Container fluid>
        <MainPage />
      </Container>
      <Switch>
        <Route exact path="/registration">
          <Registration/>
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
