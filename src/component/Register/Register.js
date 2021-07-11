import React from "react";
import {Link} from "react-router-dom";
const Register = () => {
  return <div id="bg">
    <div id="leftReg"></div>
    <div id="right">
      <div id="panel">
        <img src="" alt=""/>
          <h5>Experience the New Era of Automatic Attendance</h5>
          <p>Create your account</p>
          <form action="/register" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="username" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="submit" value="SignUp" />
            <p>Already a user? <Link to="/login">LogIn </Link></p>
          </form>
    </div>
      </div>
    </div>;
};
    export default Register;
