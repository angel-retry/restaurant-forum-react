import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './components/Laytout/PageLayout'
import HomePage from './pages/HomePage/HomePage'
import TopRestaurantPage from './pages/TopRestaurantPage/TopRestaurantPage'
import TopUsersPage from './pages/TopUsersPage/TopUsersPage'
import FeedsPage from './pages/FeedsPage/FeedsPage'

function App () {
  return (
    <PageLayout>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/restaurants' element={<HomePage />} />
        <Route path='/users/top' element={<TopUsersPage />} />
        <Route path='/restaurants/top' element={<TopRestaurantPage />} />
        <Route path='/restaurants/feeds' element={<FeedsPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
