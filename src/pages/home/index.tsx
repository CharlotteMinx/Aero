import React from 'react'
import css from "./styles.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.wrapper__profile}>
                <Link to="/profile/david">
                    <div className={css.card}>
                        <h2>Profile</h2>
                        <span class="material-symbols-outlined">face</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut quam sapiente voluptatem facilis harum tempore, similique saepe quidem, laboriosam aspernatur impedit repudiandae praesentium aliquam? Tempore nostrum dolorem fugiat error?</p>
                    </div>
                </Link>
            </div>
            <div className={css.wrapper__dashboard}>
                <Link to="/dashboard">
                    <div className={css.card}>
                        <h2>Dashboard</h2>
                        <span class="material-symbols-outlined">diversity_3</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut quam sapiente voluptatem facilis harum tempore, similique saepe quidem, laboriosam aspernatur impedit repudiandae praesentium aliquam? Tempore nostrum dolorem fugiat error?</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home