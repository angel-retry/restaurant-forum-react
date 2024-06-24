import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'

const useLogout = () => {
  const [isLogouting, setIsLogouting] = useState(false)
  const removeAuthToken = useAuthTokenStore(state => state.removeAuthToken)
  const removeAuthUser = useAuthTokenStore(state => state.removeAuthUser)

  const logout = () => {
    if (isLogouting) return
    setIsLogouting(true)
    removeAuthToken()
    removeAuthUser()
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
    setIsLogouting(false)
  }
  return { isLogouting, logout }
}

export default useLogout
