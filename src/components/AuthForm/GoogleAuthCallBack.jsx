import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuthTokenStore from '../../store/authTokenStore'
import useShowToast from '../../hooks/useShowToast'

const AuthCallback = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const setAuthToken = useAuthTokenStore(state => state.setAuthToken)
  const setAuthUser = useAuthTokenStore(state => state.setAuthUser)
  const showToast = useShowToast()

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const token = query.get('token')
    const user = query.get('user')

    if (token && user) {
      localStorage.setItem('authToken', token)
      localStorage.setItem('authUser', user)
      setAuthToken(token)
      setAuthUser(JSON.parse(user))
      showToast('Success', '登入成功', 'success')
      navigate('/')
    } else {
      showToast('Error', '登入失敗', 'error')
      navigate('/auth')
    }
  }, [location, navigate, setAuthToken, setAuthUser, showToast])

  return null
}

export default AuthCallback
