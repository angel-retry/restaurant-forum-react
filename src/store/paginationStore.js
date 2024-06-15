import { create } from 'zustand'

const usePaginationStore = create(set => ({
  count: null,
  setCount: count => set({ count }),
  currentPage: 1,
  setCurrentPage: currentPage => set({ currentPage })
}))

export default usePaginationStore
