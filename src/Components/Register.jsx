import React, { useState } from "react";
import { registerUser } from "../api/helpers";
import useAuth from "../hooks/useAuth";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, user } = useAuth();
  console.log("User from RegisterForm: ", user);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result in component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register">
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="register-form">
          <h2>Register</h2>
          <br></br>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button id="registerSubmit">Submit</button>
        </div>
      </form>
    </div>
  );
}
