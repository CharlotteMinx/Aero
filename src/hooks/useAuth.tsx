import React, { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from './useLocalStorate'

interface AuthContextType {
  userName: string
  login: (username, password) => void
  logout: () => void
}
const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useLocalStorage('userId', null)
  const navigate = useNavigate()

  // call this function when we want to authenticate the user
  const login = (username: string, password: string): void => {
    setUserName(username)
    if (password) console.log(password)
    navigate('/home')
  }

  // call this function to sign out logged in user
  const logout = (): void => {
    setUserName(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo(
    () => ({
      userName,
      login,
      logout
    }),
    [userName]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType | null => {
  return useContext(AuthContext)
}
