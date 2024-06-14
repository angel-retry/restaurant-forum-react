import axios from 'axios'
import { useState } from 'react'
import baseURL from '../config/apiConfig'
import useShowToast from './useShowToast'

const useSignin = () => {
  const [isSigning, setIsSigning] = useState(false)
  const [error, setError] = useState(null)
  const URL = `${baseURL}/signin`
  const showToast = useShowToast()

  const signin = (data) => {
    if (isSigning) return
    setIsSigning(true)

    axios
      .post(URL, data)
      .then(res => {
        console.log(res.data.data)
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
