import React from "react";
import { Button } from "react-bootstrap";
const ShowAttendence = () => {
  return (
    <div>
      <h1 style={{ margin: "1rem" }}>Show Attendance</h1>
      <input type="date" />
      <Button style={{ marginLeft: "1rem" }} variant="primary">
        Submit
      </Button>
    </div>
  );
};
export default ShowAttendence;
