import { useState } from 'react'
import baseURL from '../config/apiConfig'
import useShowToast from './useShowToast'
import axios from 'axios'

const useSignup = (setIsLogin) => {
  const [isSignuping, setIsSignuping] = useState(false)
  const [error, setError] = useState(null)
  const URL = `${baseURL}/signup`

  const showToast = useShowToast()

  const signup = (data) => {
    if (isSignuping) return
    setIsSignuping(true)

    axios
      .post(URL, data)
      .then(res => {
        const { newUser } = res.data

        if (newUser) {
          showToast('Success', '註冊成功，請登入！', 'success')
          setIsLogin(true)
        }
      })
      .catch(err => {
        const { message } = err.response.data
        showToast('Error', message, 'error')
        setError(message)
      })
      .finally(() => {
        setIsSignuping(false)
      })
  }

  return { isSignuping, error, signup }
}

export default useSignup
