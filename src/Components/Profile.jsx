import React from "react";
import useAuth from "../hooks/useAuth";
import "./Profile.css";

export default function Profile() {
  const { user } = useAuth();
  const messages = user.messages;
  const posts = user.posts;
  console.log("User from profile", user);
  console.log("Messages from profile", messages);
  return (
    <div className="profile">
      <div className="messages">
        <h2>Your Messages: </h2>
        {messages.length === 0 && (
          <p className="no-messages">You have no new messages</p>
        )}
        <p>{messages}</p>
      </div>
      <div className="yourPosts">
        <h2>Your Posts</h2>
        {posts.length === 0 && (
          <p className="no-posts">You have no new posts</p>
        )}
        <p>{posts}</p>
      </div>
    </div>
  );
}
