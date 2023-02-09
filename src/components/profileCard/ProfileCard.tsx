import React from 'react'
import { type ResultsEntity } from '../../types/ProfileResponse'
import css from './styles.css'
import { useAuth } from '../../hooks/useAuth'

interface ProfileCardProps {
  profile: ResultsEntity
}
const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { name, picture, email, gender, location, dob, registered } = profile
  const authContext = useAuth()
  const random = Math.floor(Math.random() * 19) + 1
  const articleText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas sint nisi animi voluptatum blanditiis explicabo recusandae maiores esse mollitia, fugit quam quia! Aliquid numquam eaque natus voluptates repudiandae molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit quis animi! Assumenda, et laudantium illo eius magni quisquam soluta possimus sequi, voluptate dolor omnis delectus esse quaerat, adipisci velit.'
  const logs: any[] = Array.from({ length: random }, (_, i) => <p key={i}>{`${new Date().toDateString()}: ${articleText}`}</p>)

  return (
          <div className={css.wrapper}>
             <div className={css.wrapper__card}>
               <div className={css.wrapper__profile}>
                <div className={css.wrapper__thumbnail}>
                    <img src={picture.large} alt={`photo of ${name.title} ${name.first} ${name.last}`} />
                    <h1>{`${name.title} ${name.first} ${name.last}`}</h1>
                    {(authContext != null) && <p>{`Username: ${authContext.userName}`}</p>}
                    <p>{`Born: ${new Date(dob.date).toDateString()}`}</p>
                    <p>{`Age: ${dob.age}`}</p>
                    <p>{`Registered: ${new Date(registered.date).toDateString()}`}</p>
                </div>
                <h2>Profile info:</h2>
                <div className={css.wrapper__info}>
                  <ul className={css.list__info}>
                    <li>{`Email: ${email}`}</li>
                    <li>{`Gender: ${gender}`}</li>
                    <li>{`Stret: ${location.street.name}, ${location.street.number}`}</li>
                    <li>{`Location: ${location.city}, ${location.country}`}</li>
                    <li>{`Zip: ${location.postcode}`}</li>
                  </ul>
                  <span></span>
                </div>
              </div>
              <div className={css.wrapper__log}>
                <h2>Logs:</h2>
                <div className={css.wrapper__logs}>
                  {logs}
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProfileCard
