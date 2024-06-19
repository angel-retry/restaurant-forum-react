import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useShowToast from './useShowToast'
import { useNavigate } from 'react-router-dom'
import usePaginationStore from '../store/paginationStore'

const usePostRestaurant = () => {
  const [isLoading, setIsLoading] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)
  const authUser = useAuthTokenStore(state => state.authUser)
  const showToast = useShowToast()
  const navigate = useNavigate()
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)

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
        if (restaurant) {
          setCurrentPage(1)
          showToast('Success', '新增成功', 'success')
          navigate('/restaurants')
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

export default usePostRestaurant
