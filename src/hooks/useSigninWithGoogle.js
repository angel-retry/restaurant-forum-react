import { useState } from 'react'
import baseURL from '../config/apiConfig'

const useSigninWithGoogle = () => {
  const [isLoading, setIsLoading] = useState(false)
  const URL = `${baseURL}/auth/google`

  const signinWithGoogle = () => {
    if (isLoading) return
    setIsLoading(true)
    window.location.href = URL
    setIsLoading(false)
  }
  return { isLoading, signinWithGoogle }
}

export default useSigninWithGoogle
