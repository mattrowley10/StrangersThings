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
          <button className="link" onClick={() => nav("/Profile")}>
            Profile
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/CreatePost")}>
            Create Listing
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Login")}>
            Login
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Register")}>
            Register
          </button>
        </li>
      </ul>
    </div>
  );
}
