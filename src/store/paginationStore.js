import { create } from 'zustand'

const usePaginationStore = create(set => ({
  count: null,
  setCount: count => set({ count }),
  currentPage: localStorage.getItem('currentPage'),
  setCurrentPage: currentPage => set({ currentPage })
}))

export default usePaginationStore
