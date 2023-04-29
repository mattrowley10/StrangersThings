import React from "react";
import "../Styles/SinglePost.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { deletePost } from "../api/helpers";

export default function SinglePost() {
  const location = useLocation();
  const nav = useNavigate();
  const post = location.state;
  const { user, token, id } = useAuth();
  console.log(id);
  console.log("author", post.author);
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
          <button
            className="home-button"
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </button>
          {post.author.username !== user.username && post.author !== id ? (
            [null]
          ) : (
            <button
              className="deleted-button"
              onClick={async (e) => {
                await deletePost(token, post._id);
                nav("/");
              }}
            >
              Delete
            </button>
          )}
          {post.author.username !== user.username && post.author !== id && (
            <button
              className="message-button"
              onClick={() => {
                nav("/Message", { state: post });
              }}
            >
              Message
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}
