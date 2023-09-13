import { useAsyncReducer } from "shared/hooks/useAyncReducer"
import { profileReducer } from "../model/slice/ProfileSlice"
import { useSelector } from "react-redux"
import { getProfileData } from "../model/selectors/getProfileData"
import { getProfileLoading } from "../model/selectors/getProfileLoading"
import { getProfileError } from "../model/selectors/getProfileError"
import { useAppDispatch } from "app/providers/StoreProvider"
import { useEffect } from "react"
import { getProfile } from "../model/service/getProfile/getProfile"


export const useProfile = () => {
  useAsyncReducer([{
    key:"profile", reducer:profileReducer
  }])
  const data = useSelector(getProfileData)
  const loading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getProfile())
  }, [dispatch])

 

  return {
    profile: data,
    loading,
    error
  }
}