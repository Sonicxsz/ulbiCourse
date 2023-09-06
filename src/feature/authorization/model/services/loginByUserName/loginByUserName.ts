import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User, userActions } from "entities/User"
import { USER_DATA_FROM_LOCAL } from "shared/constants/AuthUser"

    


const LOGIN_URL = "http://192.168.0.103:8000/login"

interface loginByUserNameProps {
  username: string,
  password: string
}
    
export const loginByUserName = createAsyncThunk<User, loginByUserNameProps>(
  "login/loginByUserName",
  async (data, thunkAPI) => {
    try{
      const response = await axios.post<User>(LOGIN_URL, data)

      if(!response.data){
        throw new Error("Cannot get User Data")
      }

      thunkAPI.dispatch(userActions.setUser(response.data))
      localStorage.setItem(USER_DATA_FROM_LOCAL, JSON.stringify(response.data))

      return response.data

    }catch(e){
      thunkAPI.rejectWithValue("error")
    }
  }
)

