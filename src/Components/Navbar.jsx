import React from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <div className="navbar">
      <h1>Strangers Thing's</h1>
      <ul className="navlinks">
        <li>
          <button className="link" onClick={() => nav("/")}>
            Home
          </button>
        </li>
        <li>
          <button className="link">Profile</button>
        </li>
        <li>
          <button className="link">Create Listing</button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Login")}>
            Login/Register
          </button>
        </li>
      </ul>
    </div>
  );
}
