import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <form>
        <div className="login-form">
          <h2 className="login-header">Login</h2>
          <br></br>
          <label name="username">Username:</label>
          <input type="text" placeholder="Username" />
          <br></br>
          <br></br>
          <label password="password">Password:</label>
          <input type="text" placeholder="Password" />
          <br></br>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
