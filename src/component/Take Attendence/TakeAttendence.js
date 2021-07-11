import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
const TakeAttendence = () => {
  const [date, setdate] = useState("");
  const [img, setimg] = useState("");
  const [preview, setpreview] = useState(false);
  const [url, seturl] = useState("");
  const [file, setfile] = useState("");
  const handleFinalSubmit = () => {
    console.log(date, url, "user");
    setdate("");
    setfile("");
    seturl("");
    setpreview("");
    setimg("");
  };
  const handleSubmit = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "vyqu6pwy");
    fetch("https://api.cloudinary.com/v1_1/shivam1534/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        setpreview(true);
        seturl(res.url);
      });
  };
  console.log(date);
  return (
    <div>
      <h1 style={{ margin: "1rem" }}>Take Attendence</h1>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
            setimg(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
      </div>
      <div>
        {preview && (
          <img src={img} style={{ width: "600px", margin: "1rem" }} alt="img" />
        )}
      </div>
      <div style={{ margin: "2rem " }}>
        <Button
          style={{ margin: "1rem" }}
          onClick={handleSubmit}
          variant="warning"
        >
          Preview
        </Button>
        <Button
          style={{ margin: "1rem" }}
          onClick={handleFinalSubmit}
          variant="success"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default TakeAttendence;
