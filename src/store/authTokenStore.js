import { create } from 'zustand'

const useAuthTokenStore = create((set) => ({
  authToken: localStorage.getItem('authToken'),
  setAuthToken: (token) => set({ authToken: token }),
  removeAuthToken: () => set({ authToken: null }),
  authUser: localStorage.getItem('authUser'),
  setAuthUser: (user) => set({ authUser: user }),
  getAuthUserData: (user) => set({ authUser: user })
}))

export default useAuthTokenStore
