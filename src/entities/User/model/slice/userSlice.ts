import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, UserSchema } from "../types/userSchema"
import { USER_DATA_FROM_LOCAL } from "shared/constants/AuthUser"


const initialState: UserSchema = {
  authData: null,
}

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<User>) => {
      state.authData = actions.payload
    },
    clearUser: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_DATA_FROM_LOCAL)
    }
  },
})

export const { actions: userActions } = counterSlice
export const {reducer: userReducer} = counterSlice