import React, { useState } from "react";
import './ManageStudent.css'
const ManageStudent = () => {
    const [file, setfile] = useState(null);
    const [img, setimg] = useState(null)
    return (<div>
        <div className="manage-student">
            <h1>Manage Student</h1>
            <div className="manage-div">
                <li>
                    <input type="text" placeholder="Enter the Name of Student" />
                </li>
                <li className="picker">
                    {img?<img src={img}  alt="preview"/>:<span>Image</span>}
                    <input type="file" onChange={(e) => {
                         setfile(e.target.files[0])
                        setimg(URL.createObjectURL(e.target.files[0]));
                    }} />
                </li>
                <li className="buttons"><button>Preview</button><button onClick={() => {
                    alert("Student Details Added Successfully")
                }}>Submit</button></li>
            </div>
        </div>
    </div>)
}

 export default ManageStudent;