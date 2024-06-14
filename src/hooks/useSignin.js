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
  const authToken = useAuthTokenStore(state => state.authToken)

  const signin = (data) => {
    if (isSigning) return
    setIsSigning(true)

    axios
      .post(URL, data)
      .then(res => {
        console.log(res.data.data)
        const { token } = res.data.data
        localStorage.setItem('authToken', token)
        setAuthToken(token)
        console.log(token)
        console.log(authToken)
        setError(null)
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
