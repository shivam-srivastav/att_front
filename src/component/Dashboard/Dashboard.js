import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import create from "../../Assets/create-new.png";
import take from "../../Assets/take1.png";
import show from "../../Assets/save.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 style={{ margin: "1rem" }}>DASHBOARD</h1>
      </div>
      <div
        style={{
          listStyle: "none",
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button style={{ margin: "1rem" }} variant="info" size="lg">
          <li>
            <img src={create} alt="create" />
          </li>
          <li>Manage Student</li>
        </Button>
        <Link to="takeAttendence">
          <Button style={{ margin: "1rem" }} variant="success" size="lg">
            <li style={{ margin: "0.5rem" }}>
              <img src={take} alt="create" style={{ width: "200px" }} />
            </li>
            <li>Take Attendence</li>
          </Button>
        </Link>
        <Link to="./showAttendence">
          <Button style={{ margin: "1rem" }} variant="warning" size="lg">
            <li>
              <img src={show} alt="show" style={{ width: "200px" }} />
            </li>
            <li>Show Attendence</li>{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
