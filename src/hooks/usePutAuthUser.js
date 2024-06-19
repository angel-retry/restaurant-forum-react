import { useState } from 'react'
import axios from 'axios'
import baseURL from '../config/apiConfig'
import useAuthTokenStore from '../store/authTokenStore'

const usePutAuthUser = (userId) => {
  const authToken = useAuthTokenStore(state => state.authToken)
  const [isLoading, setIsLoading] = useState(false)
  const [updateDone, setUpdateDone] = useState(false)
  if (!userId) return
  const URL = `${baseURL}/users/${userId}`

  const putAuthUser = (data) => {
    if (isLoading) return
    setIsLoading(true)

    axios
      .post(URL, data, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
          .then(res => {
            const { user } = res.data
            if (user) setUpdateDone(true)
          })
          .catch(err => console.error(err))
          .finally(() => setIsLoading(false))
      })
  }
  return { updateDone, putAuthUser, isLoading }
}

export default usePutAuthUser
