import { create } from 'zustand'

const useCategoryStore = create(set => ({
  categories: JSON.parse(localStorage.getItem('categories')),
  setCategories: categories => set({ categories }),
  currentCategory: null,
  setCurrentCategory: currentCategory => set({ currentCategory })
}))

export default useCategoryStore
