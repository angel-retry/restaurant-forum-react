import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'

const useLogout = () => {
  const [isLogouting, setIsLogouting] = useState(false)
  const removeAuthToken = useAuthTokenStore(state => state.removeAuthToken)

  const logout = () => {
    if (isLogouting) return
    setIsLogouting(true)
    removeAuthToken()
    localStorage.removeItem('authToken')
    setIsLogouting(false)
  }
  return { isLogouting, logout }
}

export default useLogout