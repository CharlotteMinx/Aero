import React, { type ChangeEvent, useState } from 'react'
import css from './styles.css'
import { useAuth } from '../../hooks/useAuth'

const Login: React.FC = () => {
  const auth = useAuth()
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement
    setData({ ...data, [target.name]: target.value })
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // call API to authenticate, save token to session
    auth?.login(username, password)
  }

  const { username, password } = data

  return (
        <div className={css.wrapper}>
            <div className={css.wrapper__image}>
                <div className={css.image}> </div>
            </div>
            <div className={css.wrapper__form} >
                <h1>Welcome back Traveler!</h1>
                <form onSubmit={submitHandler}>
                    <div className={css.wrapper__input}>
                        <span className={'material-symbols-outlined'}>person</span>
                        <input className={css.login__input} placeholder={'username'} type="text" name="username" onChange={changeHandler} value={username} />
                    </div>
                    <div className={css.wrapper__input}>
                        <span className={'material-symbols-outlined'}>key</span>
                        <input className={css.login__input} placeholder={'password'} type="password" name="password" onChange={changeHandler} value={password} />
                    </div>
                    <input className={css.login__submit} type="submit" name="submit" />
                </form>
            </div>
        </div>
  )
}

export default Login
