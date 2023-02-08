import React, { useState } from 'react';
import css from './styles.css';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const { login } = useAuth();
    const [data,setData] = useState({
        username: "",
        password: ""
    });

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value}); 
    }

    const submitHandler = e => { 
        e.preventDefault()
        //call API to authenticate, save token to session
        login("client_id123")
    }

    const {username,password} = data;

    return (
        <div className={css.wrapper}>
            <div className={css.wrapper__image}>
                <div className={css.image}> </div>
            </div>
            <div className={css.wrapper__form} >
                <h1>Welcome back Traveler!</h1>
                <form onSubmit={submitHandler}>
                    <div className={css.wrapper__input}>
                        <span class={`material-symbols-outlined ${css.login__icon}`}>person</span>
                        <input className={css.login__input} placeholder={"username"} type="text" name="username" onChange={changeHandler} value={username} />
                    </div>
                    <div className={css.wrapper__input}>
                        <span class={`material-symbols-outlined ${css.login__icon}`}>key</span>
                        <input className={css.login__input}  placeholder={"password"} type="password" name="password" onChange={changeHandler} value={password} />
                    </div>
                    <input className={css.login__submit} type="submit" name="submit" />
                </form>
            </div>
        </div>
    )
};

const b = "a";
export default Login;