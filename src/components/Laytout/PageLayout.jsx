import { Stack } from '@chakra-ui/react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

const PageLayout = ({ children }) => {
  const { pathname } = useLocation()
  const canRemderHeader = pathname !== '/auth'

  return (
    <>

      {canRemderHeader && <Header />}

      <Stack minH={'100vh'}>
        {children}
      </Stack>

      {canRemderHeader && <Footer />}

    </>
  )
}

export default PageLayout
