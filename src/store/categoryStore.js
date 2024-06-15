import { create } from 'zustand'

const useCategoryStore = create(set => ({
  currentCategory: null,
  setCurrentCategory: currentCategory => set({ currentCategory })
}))

export default useCategoryStore
