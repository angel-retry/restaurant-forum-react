import axios from 'axios'
import { useState } from 'react'
import baseURL from '../config/apiConfig'
import useShowToast from './useShowToast'
import useAuthTokenStore from '../store/authTokenStore'

const useSignin = () => {
  const [isSigning, setIsSigning] = useState(false)
  const [error, setError] = useState(null)
  const URL = `${baseURL}/signin`

  const showToast = useShowToast()
  const setAuthToken = useAuthTokenStore(state => state.setAuthToken)
  const setAuthUser = useAuthTokenStore(state => state.setAuthUser)

  const signin = (data) => {
    if (isSigning) return
    setIsSigning(true)

    axios
      .post(URL, data)
      .then(res => {
        const { token } = res.data
        localStorage.setItem('authToken', token)
        setAuthToken(token)

        axios
          .get(`${baseURL}/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            const { authUser } = res.data
            console.log(authUser)
            localStorage.setItem('authUser', JSON.stringify(authUser))
            setAuthUser(authUser)
            setError(null)
          })
          .catch(err => {
            const { message } = err.response.data
            showToast('Error', message, 'error')
            setError(message)
          })
      })
      .catch(err => {
        const { message } = err.response.data
        showToast('Error', message, 'error')
        setError(message)
      })
      .finally(() => {
        setIsSigning(false)
      })
  }

  return { signin, isSigning, error, setError }
}

export default useSignin
