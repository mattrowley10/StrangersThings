import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SinglePost from "./Components/SinglePost";
import Contact from "./Components/Contact";
import Message from "./Components/Message";
import Edit from "./Components/Edit";
import Reply from "./Components/Reply";
import useAuth from "./hooks/useAuth";

function App() {
  const { token, user } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:id" element={<SinglePost />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Reply" element={<Reply />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
