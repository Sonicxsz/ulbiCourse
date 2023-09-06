import { useSelector } from "react-redux"
import { getLoginData } from "../../model/selectors/getLoginData/getLoginData"
import { useCallback, useEffect } from "react"
import { loginActions, loginReducer } from "feature/authorization/model/slice/loginSlice"
import { loginByUserName } from "feature/authorization/model/services/loginByUserName/loginByUserName"
import { useAppDispatch } from "app/providers/StoreProvider"
import { useStore } from "react-redux"
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/stateSchema"


export const useAuthForm = () => {
  const store = useStore() as ReduxStoreWithManager
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    store.reducerManager.add("login", loginReducer)

    dispatch({type: "@init login form"})

  }, [])

  const {loading,
    password, 
    username} = useSelector(getLoginData)

  const handleChangeUserName = useCallback((val:string) => {
    dispatch(loginActions.setUserName(val))
  }, [dispatch])


  const handleChangePassword = useCallback((val:string) => {
    dispatch(loginActions.setPassword(val))
  }, [dispatch])

  const handleClickSendBtn = useCallback(() => {
    dispatch(loginByUserName({username: username, password: password}))
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