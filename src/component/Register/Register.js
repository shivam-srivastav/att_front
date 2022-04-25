import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Action from "../../utils/Actions/AttendenceActions";
const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Action.register_user({ email, name, password }));
    history.push("./dashboard");
  };
  return (
    <div id="bg">
      <div id="leftReg"></div>
      <div id="right">
        <div id="panel">
          <img src="" alt="" />
          <h5>Experience the New Era of Attendance</h5>
          <p>Create your account</p>
          <form action="/register" method="POST">
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            {/* <input
              type="username"
              name="username"
              placeholder="Username"
              required
            /> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
            <input onClick={handleSubmit} type="submit" value="SignUp" />
            <p>
              Already a user? <Link to="/login">LogIn </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
