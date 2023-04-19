import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "../api/helpers";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      try {
        const allPosts = await getPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error("Oops");
      }
    }
    getAllPosts();
  }, []);

  return (
    <div className="allposts">
      {posts.map((post) => {
        return (
          <div className="one-post" key={post._id}>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.description}</p>
            <p className="author">User: {post.author.username}</p>
            <button className="details-button">Details</button>
          </div>
        );
      })}
      ;
    </div>
  );
}
