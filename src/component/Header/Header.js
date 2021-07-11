import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#0000ff6e",
        listStyle: "none",
      }}
    >
      <li>
        <Link style={{ textDecoration: "none", color: "#000" }} to="./">
          Automatice Attendence System
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "#000" }} to="./login">
          Login
        </Link>
      </li>
    </div>
  );
};
export default Header;
