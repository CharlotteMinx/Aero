import React, { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from './useLocalStorate'

interface AuthContextType {
  userId: string
  login: (username, password) => void
  logout: () => void
}
const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useLocalStorage('userId', null)
  const navigate = useNavigate()

  // call this function when we want to authenticate the user
  const login = (username: string, password: string): void => {
    setUserId(username)
    if (password) console.log(password)
    navigate('/home')
  }

  // call this function to sign out logged in user
  const logout = (): void => {
    setUserId(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo(
    () => ({
      userId,
      login,
      logout
    }),
    [userId]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType | null => {
  return useContext(AuthContext)
}
