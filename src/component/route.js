import React from "react";
import { useSelector } from "react-redux";
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
const AppRoute = () => {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          {!user._id ? <Login /> : <Redirect to="/dashboard" />}
        </Route>
        <Route exact path="/register">
          {!user._id ? <Register /> : <Redirect to="/dashboard" />}
        </Route>
        <Route exact path="/dashboard">
          {!user._id ? <Redirect to="login" /> : <Dashboard />}
        </Route>
        <Route exact path="/takeAttendence">
          {!user._id ? <Redirect to="/login" /> : <TakeAttendence />}
        </Route>
        <Route exact path="/showAttendence">
          {!user._id ? <Redirect to="/login" /> : <ShowAttendence />}
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
export default AppRoute;
