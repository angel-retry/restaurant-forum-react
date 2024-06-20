import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import useShowToast from './useShowToast'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const useSaveRestaurant = (restaurant) => {
  const [isLoading, setIsLoading] = useState(false)
  const authUser = useAuthTokenStore(state => state.authUser)
  const [isSaved, setIsSaved] = useState(restaurant.SavedUsers.includes(authUser.id))
  const authToken = useAuthTokenStore(state => state.authToken)
  const showToast = useShowToast()

  const URL = `${baseURL}/save/${restaurant.id}`

  const postSave = () => {
    if (isLoading) return
    if (!restaurant.id) {
      showToast('Error', '沒有取得到餐廳資料!', 'error')
      return
    }
    setIsLoading(true)

    if (!isSaved) {
      axios
        .post(URL, null, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { addSaved } = res.data

          if (addSaved) {
            setIsSaved(true)
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      axios
        .delete(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { deleteSaved } = res.data
          if (deleteSaved) {
            setIsSaved(false)
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return { isLoading, postSave, isSaved }
}

export default useSaveRestaurant
