import { create } from 'zustand'

const useAuthTokenStore = create((set) => ({
  authToken: '',
  setAuthToken: (token) => set({ authToken: token }),
  removeAuthToken: () => set({ authToken: '' })
}))

export default useAuthTokenStore
