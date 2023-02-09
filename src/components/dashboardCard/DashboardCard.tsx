import React from 'react'
import { type ResultsEntity } from '../../types/ProfileResponse'
import css from './styles.css'

interface ProfileCardProps {
  profile: ResultsEntity
}
const DashboardCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { name, picture, email, dob, registered } = profile
  const renderRandomStatus = (): React.ReactNode => {
    const random = Math.floor(Math.random() * 2)
    if (random === 0) return <span className="material-symbols-outlined">favorite</span>
    return <span className="material-symbols-outlined">grade</span>
  }
  return (
        <div className={css.wrapper__card}>
            <div className={css.wrapper__thumbnail}>
                <img src={picture.large} alt={`photo of ${name.title} ${name.first} ${name.last}`} />
                <h1>{`${name.title} ${name.first} ${name.last}`}{renderRandomStatus()}</h1>
                <p>{`Born: ${new Date(dob.date).toDateString()}`}</p>
                <p>{`Age: ${dob.age}`}</p>
                <p>{`Registered: ${new Date(registered.date).toDateString()}`}</p>
                <p>{`Email: ${email}`}</p>
            </div>
        </div>
  )
}

export default DashboardCard
