import React, { useState } from "react";
import { createPost } from "../api/helpers";
import "./CreatePost.css";

export default function newPost() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="create">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newItem = await createPost(item, price);
          console.log("New Item: ", newItem);
        }}
      >
        <div className="create-form">
          <h2>List an item for sale!</h2>
          <br></br>
          <label htmlFor="item">Item:</label>
          <input type="text" onChange={(e) => setItem(e.target.value)} />
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
