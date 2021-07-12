import MaterialTable from "material-table";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../../utils/Actions/AttendenceActions";
const ShowAttendence = () => {
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [date, setdate] = useState("");
  const att_list = useSelector((state) => state.attendence.att_list);
  const userid = useSelector((state) => state.user._id);
  const handleShow = (e) => {
    e.preventDefault();
    dispatch(Action.showAttendence({ userid, date }));
    setshow(true);
  };
  const data = att_list.map((item) => {
    return { name: item, attend: "Present" };
  });
  const column = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Attendence",
      field: "attend",
    },
  ];
  return (
    <div>
      <h1 style={{ margin: "1rem" }}>Show Attendance</h1>
      <input type="date" onChange={(e) => setdate(e.target.value)} />
      <Button
        style={{ marginLeft: "1rem" }}
        onClick={handleShow}
        variant="primary"
      >
        Submit
      </Button>
      <div style={{ margin: "2rem" }}>
        <div style={{ margin: "auto", width: "80vw" }}>
          {show && (
            <MaterialTable title="Attendance" data={data} columns={column} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ShowAttendence;
