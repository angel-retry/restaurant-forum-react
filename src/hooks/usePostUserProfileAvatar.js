import { useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const usePostUserProfileAvatar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [avatarURL, setAvatarURL] = useState(null)
  const URL = `${baseURL}/users/avatar`
  const authToken = useAuthTokenStore(state => state.authToken)
  const url = 'http://localhost:3000'

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (isLoading) return
    if (!file) return
    setIsLoading(true)

    const formData = new FormData()
    formData.append('image', file)

    axios
      .post(URL, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        const { filePath } = res.data
        setAvatarURL(`${url}${filePath}`)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { isLoading, handleAvatarChange, avatarURL }
}

export default usePostUserProfileAvatar
