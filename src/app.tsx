import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Layout from './pages/layout'
import Profile from './pages/profile'
import Home from './pages/home'
import Login from './pages/login'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './hooks/useAuth'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" index element={<Login />} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="profile/:name" element={<Profile />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
