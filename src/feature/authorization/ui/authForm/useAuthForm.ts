import { useSelector } from "react-redux"
import { getLoginData } from "../../model/selectors/getLoginData/getLoginData"
import { useCallback } from "react"
import { loginActions } from "feature/authorization/model/slice/loginSlice"
import { loginByUserName } from "feature/authorization/model/services/loginByUserName/loginByUserName"
import { useAppDispatch } from "app/providers/StoreProvider"


export const useAuthForm = () => {
  const {password, username, loading} = useSelector(getLoginData)
  const dispatch = useAppDispatch()
   
  const handleChangeUserName = useCallback((val:string) => {
    dispatch(loginActions.setUserName(val))
  }, [dispatch])


  const handleChangePassword = useCallback((val:string) => {
    dispatch(loginActions.setPassword(val))
  }, [dispatch])

  const handleClickSendBtn = useCallback(() => {
    dispatch(loginByUserName({username, password}))
  }, [dispatch, password, username])

  return {
    loading,
    password, 
    username,
    handleChangeUserName,
    handleChangePassword,
    handleClickSendBtn
  }

}