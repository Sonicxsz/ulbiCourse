import { useAppDispatch } from "app/providers/StoreProvider"
import { userActions } from "entities/User"


export const useLogoutModal = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(userActions.clearUser())
  }

  return {
    handleLogout
  }
}