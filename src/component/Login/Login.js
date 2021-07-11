import React from "react";
import "./Login.css";
import icon from './../../newAssest/exams.svg'
import { Link } from "react-router-dom";
const Login = () => {
  return <div id="bg">
    <div id="left">
    </div>
    <div id="right">
      <div id="panel">
          <h5>Experience the Automatic Attendance System</h5>
            <p>Login</p>
            <form action="#" method="POST">
              <input type="username" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" required/>
                  <input type="submit" value="LogIn"/>
                    <p>New User? <Link to="/register">SignUp</Link></p>
      </form>
    </div>
  </div>
</div>;
};

export default Login;
