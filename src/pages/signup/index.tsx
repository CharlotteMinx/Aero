import React, { type ChangeEvent, useState } from 'react'
import css from './styles.css'
import { useAuth } from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'

const Login: React.FC = () => {
  const auth = useAuth()
  const [data, setData] = useState({
    username: '',
    password: '',
    email: ''
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement
    setData({ ...data, [target.name]: target.value })
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // call API to try to perform signup and login
    auth?.login(username, password)
  }

  const { username, password, email } = data

  return (
        <div className={css.wrapper}>
            <div className={css.wrapper__image}>
                <div className={css.image}> </div>
            </div>
            <div className={css.wrapper__form} >
                <h1>Sign up for free.</h1>
                <form onSubmit={submitHandler}>
                    <div className={'wrapper__input'}>
                        <span className={'material-symbols-outlined'}>person</span>
                        <input className={'login__input'} placeholder={'username'} type="text" name="username" onChange={changeHandler} value={username} />
                    </div>
                    <div className={'wrapper__input'}>
                        <span className={'material-symbols-outlined'}>key</span>
                        <input className={'login__input'} placeholder={'password'} type="password" name="password" onChange={changeHandler} value={password} />
                    </div>
                    <div className={'wrapper__input'}>
                        <span className="material-symbols-outlined">mail</span>
                        <input className={'login__input'} placeholder={'funnydog@gmail.com'} type="email" name="email" onChange={changeHandler} value={email} />
                    </div>
                    <input className={'button__login'} type="submit" name="submit" value={'Sign up!'} />
                    <NavLink to="/login">
                        <span className={css.link__signup}>{'Already a member?'}</span>
                    </NavLink>
                </form>
            </div>
        </div>
  )
}

export default Login
