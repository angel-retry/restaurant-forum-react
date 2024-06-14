import { create } from 'zustand'

const restaurantsStore = create(set => ({
  restaurants: [],
  setRestaurants: restaurants => set({ restaurants })
}))

export default restaurantsStore
