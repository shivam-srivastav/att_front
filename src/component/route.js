import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ShowAttendence from "./ShowAttendence/ShowAttendence";
import TakeAttendence from "./Take Attendence/TakeAttendence";
const route = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />r
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/takeAttendence">
          <TakeAttendence />
        </Route>
        <Route exact path="/showAttendence">
          <ShowAttendence />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
};
export default route;
