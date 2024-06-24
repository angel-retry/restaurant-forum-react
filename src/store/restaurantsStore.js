import { create } from 'zustand'

const useRestaurantsStore = create(set => ({
  restaurants: null,
  setRestaurants: restaurants => set({ restaurants }),
  restaurant: null,
  setRestaurant: restaurant => set({ restaurant }),
  addComment: newComment => set(state => ({
    restaurant: {
      ...state.restaurant,
      Comments: [...state.restaurant.Comments, newComment]
    }
  }))
}))

export default useRestaurantsStore
