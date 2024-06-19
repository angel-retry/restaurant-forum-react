import { create } from 'zustand'

const useRestaurantsStore = create(set => ({
  restaurants: [],
  setRestaurants: restaurants => set({ restaurants }),
  restaurant: null,
  setRestaurant: restaurant => set({ restaurant })
}))

export default useRestaurantsStore
