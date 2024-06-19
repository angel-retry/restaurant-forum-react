import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const usePostRestaurant = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [newRestaurant, setNewRestaurant] = useState(null)
  const authToken = useAuthTokenStore(state => state.authToken)
  const authUser = useAuthTokenStore(state => state.authUser)

  const URL = `${baseURL}/restaurants`

  const postRestaurant = data => {
    if (isLoading) return
    if (!authUser) return
    if (!data) return
    setIsLoading(true)
    axios
      .post(URL, data, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        const { restaurant } = res.data
        setNewRestaurant(restaurant)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { isLoading, postRestaurant, newRestaurant }
}

export default usePostRestaurant
