import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useShowToast from './useShowToast'

const useLikeRestaurant = (restaurant) => {
  const [isLoading, setIsLoading] = useState(false)
  const authUser = useAuthTokenStore(state => state.authUser)
  const [likes, setLikes] = useState(restaurant.LikedUsers.length)
  const [isLiked, setIsLiked] = useState(restaurant.LikedUsers.includes(authUser.id))
  const authToken = useAuthTokenStore(state => state.authToken)
  const showToast = useShowToast()

  const URL = `${baseURL}/like/${restaurant.id}`

  const postLike = () => {
    if (!restaurant.id) {
      showToast('Error', '沒有取得到餐廳資料!', 'error')
      return
    }

    if (isLoading) return
    setIsLoading(true)

    if (!isLiked) {
      axios
        .post(URL, null, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { addLiked } = res.data
          if (addLiked) {
            console.log('liked rest')
            setIsLiked(true)
            setLikes(likes + 1)
          }
          console.log(res)
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
          const { deleteLiked } = res.data
          if (deleteLiked) {
            console.log('unliked rest')
            setIsLiked(false)
            setLikes(likes - 1)
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

  return { isLoading, postLike, isLiked, likes }
}

export default useLikeRestaurant
