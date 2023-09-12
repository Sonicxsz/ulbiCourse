import { useEffect } from "react"
import { useAppDispatch } from "../../app/providers/StoreProvider"
import { getUserData, userActions } from "entities/User"
import { USER_DATA_FROM_LOCAL } from "shared/constants/AuthUser"
import { useSelector } from "react-redux"


export const useCheckLoginUser = () => {
  const isUserLogin = useSelector(getUserData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const userExist = JSON.parse(localStorage.getItem(USER_DATA_FROM_LOCAL))
    if(userExist){
      dispatch(userActions.setUser(userExist))
    }
  }, [])
  return {
    isUserLogin: Boolean(isUserLogin?.id)
  }
}