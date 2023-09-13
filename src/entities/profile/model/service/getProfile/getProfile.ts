import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { ProfileType } from "../../types/profile"

    


const PROFILE_URL = "/profile"


    
export const getProfile = createAsyncThunk<ProfileType, void, {rejectValue: string}>(
  "profile/getProfileData",
  async (_, thunkAPI) => {
    try{
      const response = await $api.get<ProfileType>(PROFILE_URL)

      if(!response.data ){
        throw new Error("Cannot get User Data")
      }
      
      return response.data

    }catch(e){
      return thunkAPI.rejectWithValue("error")
    }
  }
)

