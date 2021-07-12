import React, { useState } from "react";
import "./Login.css";
import * as Action from "../../utils/Actions/AttendenceActions";
// import icon from './../../newAssest/exams.svg'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(Action.login_user({ email, password }));
    history.push("./dashboard");
  };
  return (
    <div id="bg">
      <div id="left"></div>
      <div id="right">
        <div id="panel">
          <h5>Experience the Automatic Attendance System</h5>
          <p>Login</p>
          <form action="#" method="POST">
            <input
              type="username"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              name="password"
              placeholder="Password"
              required
            />
            <input onClick={handleSubmit} type="submit" value="LogIn" />
            <p>
              New User? <Link to="/register">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
