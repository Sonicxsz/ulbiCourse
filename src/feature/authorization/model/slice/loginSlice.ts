import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByUserName } from "../services/loginByUserName/loginByUserName"


export const initialState: LoginSchema = {
  username: "",
  password: "",
  loading: false,
  error: ""
}

export const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setUserName: (state, action:PayloadAction<string>) => {
      state.username = action.payload

    },
    setPassword: (state, action:PayloadAction<string>) => {
      state.password = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.loading = true
      })    
      .addCase(loginByUserName.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.loading = false
        state.error = typeof action.payload === "string" && action.payload
      })
  }
})

export const { actions: loginActions } = loginSlice
export const {reducer: loginReducer} = loginSlice