import { create } from 'zustand'

const useTabStore = create(set => ({
  currentProfileTab: 'created',
  setCurrentProfileTab: currentTab => set({ currentTab })
}))

export default useTabStore
