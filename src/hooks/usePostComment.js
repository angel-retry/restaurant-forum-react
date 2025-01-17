import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useRestaurantsStore from '../store/restaurantsStore'
import useShowToast from '../hooks/useShowToast'

const usePostComment = (restaurantId) => {
  const [isLoading, setIsLoading] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)
  const authUser = useAuthTokenStore(state => state.authUser)
  const addComment = useRestaurantsStore(state => state.addComment)
  const restaurant = useRestaurantsStore(state => state.restaurant)
  const showToast = useShowToast()

  const URL = `${baseURL}/comments/${restaurantId}`

  const postComment = (text) => {
    if (isLoading) return
    setIsLoading(true)
    axios
      .post(URL, text, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        const { newComment } = res.data
        const commentData = {
          ...newComment,
          username: authUser.name,
          avatar: authUser.avatar
        }
        console.log({ newComment })
        addComment(commentData)
        console.log({ restaurant })
        showToast('Success', '成功新增評論', 'success')
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { isLoading, postComment }
}

export default usePostComment
