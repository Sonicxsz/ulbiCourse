import { useAsyncReducer } from "shared/hooks/useAyncReducer"
import { profileReducer } from "../model/slice/ProfileSlice"



export const useProfile = () => {
  useAsyncReducer([{
    key:"profile", reducer:profileReducer
  }])


}