import { create } from 'zustand'

const useUserProfileStore = create(set => ({
  userProfile: null,
  setUserProfile: userProfile => set({ userProfile }),
  addFollowings: (userId) => set(state => ({
    userProfile: {
      ...state.userProfile,
      Followings: [...state.userProfile.Followings, userId]
    }
  })),
  removeFollowings: (userId) => set(state => ({
    userProfile: {
      ...state.userProfile,
      Followings: state.userProfile.Followings.filter(id => id !== userId)
    }
  })),
  addFollowers: (userId) => set(state => ({
    userProfile: {
      ...state.userProfile,
      Followers: [...state.userProfile.Followers, userId]
    }
  })),
  removeFollowers: (userId) => set(state => ({
    userProfile: {
      ...state.userProfile,
      Followers: state.userProfile.Followers.filter(id => id !== userId)
    }
  }))
}))

export default useUserProfileStore
