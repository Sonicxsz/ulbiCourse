import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfileSchema } from "../types/profile"


export const initialState: ProfileSchema = {
  profile: undefined,
  isLoading: false,
  error: ""
}

export const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
   
  },

  
})

export const { actions: profileActions } = profileSlice
export const {reducer: profileReducer} = profileSlice