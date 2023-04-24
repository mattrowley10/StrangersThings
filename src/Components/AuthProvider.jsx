import React from "react";
import { createContext, useState, useEffect } from "react";
import { getToken } from "../api/helpers";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getMe() {
      const apiResponse = await getToken(token);
      setUser(apiResponse.data);
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
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
