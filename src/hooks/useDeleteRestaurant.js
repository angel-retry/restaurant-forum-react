import axios from 'axios'
import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import useShowToast from './useShowToast'
import { useNavigate } from 'react-router-dom'
import baseURL from '../config/apiConfig'

const useDeleteRestaurant = (restaurantId) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)
  const showToast = useShowToast()
  const navigate = useNavigate()

  const URL = `${baseURL}/restaurants/${restaurantId}`
  const deleteRestaurant = () => {
    if (isDeleting) return
    if (!authToken) return
    setIsDeleting(true)
    axios
      .delete(URL, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then((res) => {
        const { deleteRestaurant } = res.data
        if (deleteRestaurant) {
          showToast('Success', '刪除成功!', 'success')
          navigate(-1)
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsDeleting(false)
      })
  }

  return { isDeleting, deleteRestaurant }
}

export default useDeleteRestaurant
