import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './components/Laytout/PageLayout'

function App () {
  return (
    <PageLayout>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
