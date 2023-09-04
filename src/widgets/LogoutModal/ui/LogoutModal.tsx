import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Modal } from "widgets/Modal"
import css from "./LogoutModal.module.scss"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { useLogoutModal } from "./useLogoutModal"

interface LogoutModalProps {
    isVisible: boolean;
    closeModal: () => void;
}


export function LogoutModal({isVisible, closeModal}: LogoutModalProps) {
  const {t} = useTranslation()
  const {handleLogout} = useLogoutModal()
  return <Modal isVisible={isVisible} closeModal={closeModal}>
    <div className={css.wrapper}>
      <Typography variant={TypographyVariant.TEXT}>{t("logout")}</Typography>
      <div>
        <Button onClick={handleLogout} theme={ThemeButton.OUTLINE_INVERTED}>{t("yes")}</Button>
        <Button onClick={closeModal} className={css.btn} theme={ThemeButton.OUTLINE_INVERTED}>{t("no")}</Button>
      </div>
    </div>
  </Modal>

  
}

