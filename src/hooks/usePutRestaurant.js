import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useShowToast from './useShowToast'
import { useNavigate } from 'react-router-dom'

const usePutRestaurant = (restaurantId) => {
  const [isLoading, setIsLoading] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)
  const showToast = useShowToast()
  const navigate = useNavigate()

  const URL = `${baseURL}/restaurants/${restaurantId}`

  const postRestaurant = (data) => {
    if (isLoading) return
    if (!data) return
    setIsLoading(true)
    axios
      .put(URL, data, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        const { updatedRestaurant } = res.data
        if (updatedRestaurant) {
          showToast('Success', '餐廳更新成功!', 'success')
          navigate(`restaurants/${restaurantId}`)
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return { isLoading, postRestaurant }
}

export default usePutRestaurant
