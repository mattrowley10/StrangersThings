import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const nav = useNavigate();
  const { user, token } = useAuth();
  return (
    <div className="navbar">
      <h1>Strangers Thing's</h1>
      <ul className="navlinks">
        <li>
          <button className="link" onClick={() => nav("/")}>
            Home
          </button>
        </li>
        {token && (
          <li>
            <button className="link" onClick={() => nav("/Profile")}>
              Profile
            </button>
          </li>
        )}
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
