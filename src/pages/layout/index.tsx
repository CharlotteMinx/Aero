import { Outlet } from 'react-router-dom'
import React from 'react'
import css from './styles.css'
import Navbar from '../../components/navbar'
import { AuthProvider } from '../../hooks/useAuth'

const Layout: React.FC = () => {
  return (
        <AuthProvider>
            <div className={css.wrapper}>
                <Navbar />
                <main className={css.wrapper__content}>
                    <Outlet />
                </main>
            </div>
        </AuthProvider>
  )
}

export default Layout
