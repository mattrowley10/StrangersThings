import React from "react";
import useAuth from "../hooks/useAuth";
import "../Styles/Profile.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { deletePost, editPost, getToken, postMessage } from "../api/helpers";

export default function Profile() {
  const { user, token } = useAuth();
  const nav = useNavigate();
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getMyPosts() {
      const getMe = await getToken(token);
      setPosts(getMe.data.posts);
      setMessages(getMe.data.messages);
    }
    getMyPosts();
  }, [posts]);
  return (
    <div className="profile">
      <h2 className="profile-header">Welcome {user.username}!</h2>
      <div className="yourMessages">
        <h2>Your Messages: </h2>
        {messages.length === 0 && (
          <p className="no-messages">You have no new messages</p>
        )}
        {messages.map((message) => {
          if (message.fromUser.username !== user.username)
            return (
              <div className="one-message" key={message._id}>
                <p>From: {message.fromUser.username}</p>
                <br></br>
                <p className="one-message-content">{message.content}</p>
                <br></br>
                <p>{message.post.title}</p>
                <br></br>
                <button
                  className="reply-button"
                  onClick={() => {
                    nav("/Reply", { state: message });
                    console.log(message);
                  }}
                >
                  Reply
                </button>
              </div>
            );
        })}
      </div>
      <div className="yourPosts">
        <h2>Your Posts:</h2>
        {posts.length === 0 && (
          <p className="no-posts">You have no new posts</p>
        )}
        {posts.map((post) => {
          if (post.active === true) {
            return (
              <div className="profile-one-post" key={post._id}>
                <h1 className="post-title">{post.title}</h1>
                <ul className="post-info">
                  <li>
                    <p className="post-body">{post.description}</p>
                  </li>
                  <li>
                    <p className="author">User: {user.username}</p>
                    {post.willDeliver ? (
                      <p className="delivery">Will Deliver!</p>
                    ) : (
                      <p></p>
                    )}
                  </li>
                </ul>
                <button
                  className="details-button"
                  onClick={() => {
                    console.log(post);
                    nav("/id", { state: post });
                  }}
                >
                  Details
                </button>
                <button
                  className="delete-button"
                  onClick={async (e) => {
                    await deletePost(token, post._id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit-button"
                  onClick={async (e) => {
                    // await editPost(token, post._id);
                    nav("/Edit", { state: post });
                  }}
                >
                  Edit
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
