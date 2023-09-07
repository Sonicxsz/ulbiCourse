import { useSelector } from "react-redux"
import { getLoginData } from "../../model/selectors/getLoginData/getLoginData"
import { useCallback} from "react"
import { loginActions, loginReducer } from "feature/authorization/model/slice/loginSlice"
import { loginByUserName } from "feature/authorization/model/services/loginByUserName/loginByUserName"
import { useAppDispatch } from "app/providers/StoreProvider"
import { useAsyncReducer } from "shared/hooks/useAyncReducer"



export const useAuthForm = () => {

  const dispatch = useAppDispatch()
  useAsyncReducer([
    {key: "login", reducer: loginReducer}
  ])
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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