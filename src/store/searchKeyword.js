import { create } from 'zustand'

const useSearchKeyword = create(set => ({
  keyword: null,
  setKeyword: keyword => set({ keyword })
}))

export default useSearchKeyword
