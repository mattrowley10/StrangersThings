import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <h1 className="login-header">Login</h1>
        <br></br>
        <label name="username">Username:</label>
        <br></br>
        <input type="text" placeholder="Username" />
        <br></br>
        <label password="password">Password:</label>
        <br></br>
        <input type="text" placeholder="Password" />
      </form>
    </div>
  );
}
