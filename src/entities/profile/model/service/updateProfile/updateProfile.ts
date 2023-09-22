import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { ProfileType } from "../../types/profile"

    


const PROFILE_URL = "/profile"


    
export const updateProfile = createAsyncThunk<ProfileType, ProfileType, {rejectValue: string}>(
  "profile/updateProfileData",
  async (data, thunkAPI) => {
    try{
      const response = await $api.post<ProfileType>(PROFILE_URL, data)

      if(!response.data ){
        throw new Error("Cannot get User Data")
      }
      
      return response.data

    }catch(e){
      return thunkAPI.rejectWithValue("error")
    }
  }
)

