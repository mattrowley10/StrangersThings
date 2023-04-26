import React, { useState } from "react";
import { createPost } from "../api/helpers";
import "../Styles/CreatePost.css";
import useAuth from "../hooks/useAuth";

export default function newPost() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [location, setLocation] = useState("");
  const { user, token } = useAuth();
  const posts = user.posts;

  return (
    <div className="create">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newItem = await createPost(
            user,
            title,
            price,
            description,
            location,
            willDeliver,
            token
          );
        }}
      >
        <div className="create-form">
          <h2>List an item for sale!</h2>
          <br></br>
          <label htmlFor="title">Title:</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <br></br>
          <br></br>
          <label htmlFor="description">Description:</label>
          <input
            className="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="price">Price:</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
          <br />
          <label htmlFor="location">Location:</label>
          <input type="text" onChange={(e) => setLocation(e.target.value)} />
          <br />
          <label htmlFor="willDeliver">Will Deliver?</label>
          <input
            type="checkbox"
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
