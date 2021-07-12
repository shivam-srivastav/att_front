import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const status = useSelector((state) => state.user);
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
        {!status?._id ? (
          <>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="./login"
            >
              Login
            </Link>
            /
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="./register"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <span>Hi, {status.email.split("@")[0]}</span>
            <span style={{ marginLeft: "1rem" }}>Log Out</span>
          </>
        )}
      </li>
    </div>
  );
};
export default Header;
