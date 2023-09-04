import { useCallback, useState } from "react"


export const useNavbar = () => {
  const [logoutModal, setLogoutModal] = useState(false)

  const closeLogoutModal = useCallback(() => {
    setLogoutModal(false)
  }, [])

  const openLogoutModal = useCallback(() => {
    setLogoutModal(true)
  }, [])

  const logoutModalProps = {
    logoutModal,
    closeLogoutModal,
    openLogoutModal
  }

  return {
    logoutModalProps
  }
}