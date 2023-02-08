import { createContext, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
import React from 'react'
import { useLocalStorage } from "./useLocalStorate";

export const AuthProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useLocalStorage("userId", null);
  const navigate = useNavigate();

  // call this function when we want to authenticate the user
  const login = async (data) => {
    setUserId(data);
    navigate("/home");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUserId(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      userId,
      login,
      logout
    }),
    [userId]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {  
    console.log(useContext(AuthContext))
  return useContext(AuthContext);
};