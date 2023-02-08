import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React from 'react'

export const ProtectedRoute: React.FC = ({ children }) => {
  const { userId } = useAuth();
  if (!userId) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};