import { useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const usePostUserProfileAvatar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [avatarURL, setAvatarURL] = useState(null)
  const URL = `${baseURL}/users/avatar`
  const authToken = useAuthTokenStore(state => state.authToken)

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]

    axios
      .post(URL, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  return { isLoading, handleAvatarChange }
}

export default usePostUserProfileAvatar
