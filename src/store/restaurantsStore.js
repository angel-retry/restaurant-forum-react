import { create } from 'zustand'

const useRestaurantsStore = create(set => ({
  restaurants: [],
  setRestaurants: restaurants => set({ restaurants }),
  restaurant: null,
  setRestaurant: restaurant => set({ restaurant }),
  addComment: newComment => set(state => ({
    ...state.restaurant,
    CommentedUsers: [...state.restaurant.CommentedUsers, newComment]
  }))
}))

export default useRestaurantsStore
