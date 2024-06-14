import { create } from 'zustand'

const useRestaurantsStore = create(set => ({
  restaurants: [],
  setRestaurants: restaurants => set({ restaurants })
}))

export default useRestaurantsStore
