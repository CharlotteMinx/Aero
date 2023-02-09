import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import React from 'react'

interface ProptectedRouteProps {
  children: React.ReactNode
}
export const ProtectedRoute = ({ children }: ProptectedRouteProps): React.ReactNode => {
  const authContext = useAuth()
  if (!authContext?.userId) {
    // user is not authenticated
    return <Navigate to="/" />
  }
  return children
}
