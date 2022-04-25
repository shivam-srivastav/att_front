import React, { useState } from "react";
import './ManageStudent.css'
const ManageStudent = () => {
    const [file, setfile] = useState(null);
    const [url, seturl] = useState("")
    const [preview, setpreview] = useState(false)
    const [name, setname] = useState("")
  const handlePreview = () => {
    const data = new FormData();
    data.append("image", file);
    data.append("name", "knsk");
    fetch("http://localhost:5000/api/v1/photo", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        setpreview(true);
        seturl(res.data.url);
      });
  };
    const handleSubmit = () => {
        const data = {
            name,
            url
        }
        fetch("http://localhost:5000/api/v1/manageStudent", {
            method: "post",
            body: JSON.stringify(data),
        }).then(res => {
            alert(res.msg);
        }).catch(err => {
                alert(err.msg)
            })
  }
    return (<div>
        <div className="manage-student">
            <h1>Manage Student</h1>
            <div className="manage-div">
                <li>
                    <input type="text" value={ name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the Name of Student" />
                </li>
                <li className="picker">
                    <input type="file" onChange={(e) => {
                        setfile(e.target.files[0])
                        setpreview(false);
                        // setimg(URL.createObjectURL(e.target.files[0]));
                    }} />
                </li>
                <li>
                    {preview && <img style={{width:'10rem'}} src={url} alt="preview"/>}
                </li>
                <li className="buttons">
                    {!preview?
                    <button onClick={()=>{handlePreview()}} >Preview</button>:
                        <button onClick={()=>{handleSubmit()} } >Submit</button>}
                </li>
            </div>
        </div>
    </div>)
}

 export default ManageStudent;