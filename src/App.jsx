import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './components/Laytout/PageLayout'
import HomePage from './pages/HomePage/HomePage'
import TopRestaurantPage from './pages/TopRestaurantPage/TopRestaurantPage'
import TopUsersPage from './pages/TopUsersPage/TopUsersPage'
import FeedsPage from './pages/FeedsPage/FeedsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import EditProfilePage from './pages/EditProfilePage/EditProfilePage'
import CreateRestaurantPage from './pages/RestaurantFormPage/CreateRestaurantPage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import useAuthTokenStore from './store/authTokenStore'
import EditRestaurantPage from './pages/RestaurantFormPage/EditRestaurantPage'

function App () {
  const authToken = useAuthTokenStore(state => state.authToken)

  return (
    <PageLayout>
      <Routes>
        {
          authToken
            ? (
            <>
            <Route path='/restaurants' element={<HomePage />} />
            <Route path='/users/top' element={<TopUsersPage />} />
            <Route path='/restaurants/top' element={<TopRestaurantPage />} />
            <Route path='/restaurants/feeds' element={<FeedsPage />} />
            <Route path='/restaurants/create' element={<CreateRestaurantPage />} />
            <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
            <Route path='/restaurants/:restaurantId/edit' element={<EditRestaurantPage />} />
            <Route path='/users/:userId' element={<ProfilePage />} />
            <Route path='/users/:userId/edit' element={<EditProfilePage />} />
            <Route path='*' element={<Navigate to={'/restaurants'}/>} />
            </>
              )
            : (
            <>
              <Route path='/auth' element={<AuthPage />} />
              <Route path='*' element={<Navigate to={'/auth'}/>} />
            </>
              )
        }

      </Routes>
    </PageLayout>
  )
}

export default App
