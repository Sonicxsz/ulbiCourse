import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfileSchema, ProfileType } from "../types/profile"
import { getProfile } from "../service/getProfile/getProfile"
import { updateProfile } from "../service/updateProfile/updateProfile"
import { validateProfile } from "shared/lib/validator/validateProfile"


export const initialState: ProfileSchema = {
  profile: undefined,
  loading: false,
  error: [],
  editable: false,

}

export const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    changeEditable: (state) => {
      state.editable = state.editable ? false : true
    },
    changeProfile: (state, action: PayloadAction<Partial<ProfileType>>) => {
      if(!state.profile) return 
      state.profile = {...state.profile, ...action.payload}
      const errors = validateProfile(state.profile)
      state.error = errors || []

    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true
        state.error = []
      })    
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.profile = action.payload
        state.loading = false
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false
        state.error.push(action.payload || "")
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true
        state.error = []
      })    
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.profile = action.payload
        state.loading = false
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false
        state.error.push(action.payload || "") 
      })
  }

  
})

export const { actions: profileActions } = profileSlice
export const {reducer: profileReducer} = profileSlice