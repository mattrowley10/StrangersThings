import React from "react";
import { createContext, useState, useEffect } from "react";
import { getToken } from "../api/helpers";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const [posts, setPosts] = useState({});
  useEffect(() => {
    async function getMe() {
      const apiResponse = await getToken(token);
      setUser(apiResponse.data);
      setId(apiResponse.data._id);
      setPosts(apiResponse.data.posts);
    }
    if (token) {
      getMe();
    }
  }, [token]);
  const contextValue = {
    token,
    setToken,
    user,
    setUser,
    id,
    setId,
    posts,
    setPosts,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
