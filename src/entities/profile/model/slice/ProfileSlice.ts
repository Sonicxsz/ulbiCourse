import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfileSchema, ProfileType } from "../types/profile"
import { getProfile } from "../service/getProfile/getProfile"


export const initialState: ProfileSchema = {
  profile: undefined,
  loading: false,
  error: ""
}

export const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true
      })    
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.profile = action.payload
        state.loading = false
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false
        state.error = typeof action.payload === "string" ? action.payload : ""
      })
  }

  
})

export const { actions: profileActions } = profileSlice
export const {reducer: profileReducer} = profileSlice