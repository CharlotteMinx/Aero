import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Layout from './pages/layout'
import Profile from './pages/profile'
import Home from './pages/home'
import Login from './pages/login'
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute'
import Signup from './pages/signup'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="profile/:name" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
