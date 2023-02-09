import React from 'react'
import css from './styles.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Navbar: React.FC = () => {
  const authContext = useAuth()
  return (
        <>
            {!((authContext?.userName) == null) && <nav className={css.navbar}>
                <li>
                    <NavLink to={`/profile/${authContext.userName}`}>
                        <span className={`material-symbols-outlined ${css.navbar__icon}`}>account_circle</span>
                        <span className={css.navbar__link}>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">
                        <span className={`material-symbols-outlined ${css.navbar__icon}`}>diversity_1</span>
                        <span className={css.navbar__link}>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" onClick={authContext.logout}>
                        <span className={`material-symbols-outlined ${css.navbar__icon}`}>meeting_room</span>
                        <span className={css.navbar__link}>Logout</span>
                    </NavLink>
                </li>
            </nav>}
        </>
  )
}

export default Navbar
