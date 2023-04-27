import React from "react";
import "../Styles/SinglePost.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

export default function SinglePost() {
  const location = useLocation();
  const nav = useNavigate();
  const post = location.state;
  console.log(post);
  return (
    <div className="singles-post">
      <h1 className="single-post-header">Details</h1>
      <div className="ones-post">
        <h1 className="post-title">{post.title}</h1>
        <ul className="post-info">
          <li>
            <p className="post-body">{post.description}</p>
          </li>
          <li>
            <p className="author">User: {post.author.username}</p>
            {post.willDeliver ? (
              <p className="delivery">Will Deliver!</p>
            ) : (
              <p></p>
            )}
          </li>
          <li>
            <p className="post-location">{post.location}</p>
          </li>
          <li>
            <p className="post-price">{post.price}</p>
          </li>
          <li>
            <button
              className="home-button"
              onClick={() => {
                nav("/");
              }}
            >
              Home
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
