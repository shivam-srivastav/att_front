import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div style={{ textAlign: "left", margin: "1rem" }}>
      <h1>Project Name: Automatic Attendance System</h1>
      <div style={{ margin: "2rem" }}>
        <h3>Group Members:</h3>
        <li>
          <b>Shivam Srivastava</b>
        </li>
        <li>
          <b>Vikas Kumar Ojha</b>
        </li>
        <li>
          <b>Riya Nigam</b>
        </li>
      </div>
      <div style={{ margin: "1rem", textAlign: "justify" }}>
        <h2>Project Details</h2>
        <p>
          <b>Problem Statement:-</b> Marking attendance is both time and effort
          taking process. On average it takes at least 5 min of the lecture to
          mark the attendance. Also, there are numerous challenges in marking
          attendance with good accuracy as sometimes there might be a student
          whose voice might not be loud enough and he might get left which is a
          big problem. Also, there are situations in which students might trick
          the teacher for proxy attendance
        </p>
        <p>
          <b>Solution:-</b> To counter the above problems we propose the idea of
          an automatic attendance system that recognizes the students present in
          the image uploaded to it and marks the attendance automatically saving
          both the time and effort of the teacher as well as students. It will
          also remove the chance of proxy attendance.
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        {!user?._id ? (
          <Link to="./login">
            <Button variant="primary">Login to Access</Button>
          </Link>
        ) : (
          <Link to="./dashboard">
            <Button variant="primary">Go to Dashboard</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Home;
