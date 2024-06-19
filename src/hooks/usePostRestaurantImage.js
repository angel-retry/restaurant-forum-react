import { useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const usePostRestaurantImage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [imageURL, setImageURL] = useState(null)
  const URL = `${baseURL}/restaurants/image`
  const authToken = useAuthTokenStore(state => state.authToken)
  const url = 'http://localhost:3000'

  const handleImageChange = (e) => {
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
        setImageURL(`${url}${filePath}`)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { isLoading, handleImageChange, imageURL }
}

export default usePostRestaurantImage
