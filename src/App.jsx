import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './components/Laytout/PageLayout'
import HomePage from './pages/HomePage/HomePage'
import TopRestaurantPage from './pages/TopRestaurantPage/TopRestaurantPage'
import TopUsersPage from './pages/TopUsersPage/TopUsersPage'
import FeedsPage from './pages/FeedsPage/FeedsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import EditProfilePage from './pages/EditProfilePage/EditProfilePage'

function App () {
  return (
    <PageLayout>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/restaurants' element={<HomePage />} />
        <Route path='/users/top' element={<TopUsersPage />} />
        <Route path='/restaurants/top' element={<TopRestaurantPage />} />
        <Route path='/restaurants/feeds' element={<FeedsPage />} />
        <Route path='/users/:userId' element={<ProfilePage />} />
        <Route path='/users/:userId/edit' element={<EditProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
