import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import React from 'react'

interface ProptectedRouteProps {
  children: JSX.Element
}
export const ProtectedRoute = ({ children }: ProptectedRouteProps): JSX.Element => {
  const authContext = useAuth()
  if ((authContext != null) && !authContext?.userName) {
    // user is not authenticated
    return <Navigate to="/login" />
  }
  return <>{children}</>
}
