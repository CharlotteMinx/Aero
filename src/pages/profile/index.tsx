import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type ProfileResponse from '../../types/ProfileResponse'
import { type ResultsEntity } from '../../types/ProfileResponse'
import { Navigate } from 'react-router-dom'
import ProfileCard from '../../components/profileCard/ProfileCard'
const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<ResultsEntity>()

  useEffect(() => {
    const fetchData = async (): Promise<ProfileResponse | undefined> => {
      setLoading(true)
      try {
        const response = await axios.get('https://randomuser.me/api')
        return response.data as ProfileResponse
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchData()
      .then(data => {
        ((data?.results) != null) && setProfile(data?.results[0])
        setLoading(false)
      })
      .catch(e => { console.error(e) })
  }, [])

  if (profile === undefined && !loading) {
    return <Navigate to="/" />
  } else if (profile === undefined) {
    // placeholder for some very cool spinny spin
    return <>loading</>
  } else {
    return <ProfileCard profile={profile}/>
  }
}

export default Profile
