import React from "react";
import { editPost } from "../api/helpers";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import "../Styles/Edit.css";

export default function Edit() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const nav = useNavigate();
  const local = useLocation();
  const post = local.state;
  const { user, token, setPosts, posts } = useAuth();

  return (
    <div className="edit-container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const editedData = await editPost(
            token,
            post._id,
            title,
            description,
            price,
            location,
            willDeliver
          );
          const editedPost = editedData.data.post;
          const newPosts = posts.map((post) => {
            if (post !== editedData) {
              return editedData;
            } else {
              return post;
            }
          });
          setPosts(newPosts);
          nav("/Profile");
        }}
      >
        <div className="edit-form">
          <h2>List an item for sale!</h2>
          <br></br>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title-input"
            defaultValue={post.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="description">Description:</label>
          <input
            className="description"
            type="text"
            defaultValue={post.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            defaultValue={post.price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            defaultValue={post.location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <label htmlFor="willDeliver">Will Deliver?</label>
          <input
            type="checkbox"
            defaultChecked={post.willDeliver}
            onChange={(e) => setWillDeliver(e.target.value === true)}
          />
          <br></br>
          <br></br>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
