import { create } from 'zustand'

const useTabStore = create(set => ({
  currentProfileTab: 'created',
  setCurrentProfileTab: currentProfileTab => set({ currentProfileTab })
}))

export default useTabStore
