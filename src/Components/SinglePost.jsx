import React from "react";
import "./SinglePost.css";
import { useState, useEffect } from "react";
import { getPosts } from "../api/helpers";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = useState("");
  const { _id } = useParams();
  useEffect(() => {
    async function onePost() {
      try {
        const getPost = await getPosts(_id);
        setPost(getPost);
      } catch (error) {
        console.error("Oops");
      }
    }
    onePost();
  }, []);

  return (
    <div className="single-post">
      {post && (
        <div className="one-post" key={post.id}>
          <h1 className="post-title">No Reference to Single Post in API</h1>
          <ul className="post-info">
            <li>
              <p className="post-body">{post.description}</p>
            </li>
          </ul>
          <button className="details-button">Details</button>
        </div>
      )}
    </div>
  );
}
