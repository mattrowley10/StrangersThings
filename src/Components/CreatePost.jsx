import React, { useState } from "react";
import { createPost } from "../api/helpers";
import "../Styles/CreatePost.css";
import useAuth from "../hooks/useAuth";

export default function newPost() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth();
  const posts = user.posts;

  return (
    <div className="create">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newItem = await createPost();
          console.log("New Item: ", newItem);
        }}
      >
        <div className="create-form">
          <h2>List an item for sale!</h2>
          <br></br>
          <label htmlFor="Title">Title:</label>
          <input type="text" onChange={(e) => setItem(e.target.value)} />
          <br></br>
          <br></br>
          <label htmlFor="Description">Description:</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
          <br />
          <br />
          <label htmlFor="price">Price:</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
          <br />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
