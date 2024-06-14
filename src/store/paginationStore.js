import { create } from 'zustand'

const usePagination = create(set => ({
  page: 1,
  pages: [],
  prevPage: 1,
  nextPage: 2,
  totalPage: null,
  setPage: page => set({ page }),
  setPages: pages => set({ pages }),
  setPrevPage: prevPage => set({ prevPage }),
  setNextPage: nextPage => set({ nextPage }),
  setTotalPage: totalPage => set({ totalPage })
}))

export default usePagination
