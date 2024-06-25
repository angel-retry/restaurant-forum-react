import { create } from 'zustand'

const useAuthTokenStore = create((set) => ({
  authToken: localStorage.getItem('authToken'),
  setAuthToken: (token) => set({ authToken: token }),
  removeAuthToken: () => set({ authToken: null }),
  authUser: JSON.parse(localStorage.getItem('authUser')),
  setAuthUser: (user) => set({ authUser: user }),
  removeAuthUser: () => set({ authUser: null }),
  isLogin: true,
  setIsLogin: (isLogin) => set({ isLogin })
}))

export default useAuthTokenStore
