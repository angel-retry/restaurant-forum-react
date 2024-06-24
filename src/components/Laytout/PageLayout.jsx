import { Stack } from '@chakra-ui/react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import useAuthTokenStore from '../../store/authTokenStore'

const PageLayout = ({ children }) => {
  const { pathname } = useLocation()
  const authToken = useAuthTokenStore(state => state.authToken)
  const authUser = useAuthTokenStore(state => state.authUser)
  const canRemderHeader = pathname !== '/auth' && authToken && authUser

  return (
    <>

      {canRemderHeader && <Header />}

      <Stack minH={'100vh'} pt={canRemderHeader ? 20 : 0}>
        {children}
      </Stack>

      {canRemderHeader && <Footer />}

    </>
  )
}

export default PageLayout
