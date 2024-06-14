import { create } from 'zustand'

const useAuthTokenStore = create((set) => ({
  authToken: localStorage.getItem('authToken'),
  setAuthToken: (token) => set({ authToken: token }),
  removeAuthToken: () => set({ authToken: null })
}))

export default useAuthTokenStore
