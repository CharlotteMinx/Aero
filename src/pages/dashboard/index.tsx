import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type ProfileResponse from '../../types/ProfileResponse'
import { type ResultsEntity } from '../../types/ProfileResponse'
import { Navigate } from 'react-router-dom'
import DashboardCard from '../../components/dashboardCard/DashboardCard'
import css from './styles.css'

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [profiles, setProfile] = useState<ResultsEntity[]>()

  const random = Math.floor(Math.random() * 4) + 5

  useEffect(() => {
    const fetchData = async (): Promise<ProfileResponse | undefined> => {
      setLoading(true)
      try {
        const response = await axios.get(`https://randomuser.me/api?results=${random}`)
        return response.data as ProfileResponse
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchData()
      .then(data => {
        ((data?.results) != null) && setProfile(data?.results)
        setLoading(false)
      })
      .catch(e => { console.error(e) })
  }, [])

  if (profiles === undefined && !loading) {
    return <Navigate to="/" />
  } else if (profiles === undefined) {
    // placeholder for some very cool spinny spin
    return <>loading</>
  } else {
    return (
    <div className={css.wrapper}>
      {profiles.map((p, i) => <DashboardCard profile={p} key={i}/>)}
    </div>)
  }
}

export default Dashboard
