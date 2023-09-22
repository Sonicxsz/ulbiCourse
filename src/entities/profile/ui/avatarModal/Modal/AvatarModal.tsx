import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Modal } from "widgets/Modal"
import css from "./style.module.scss"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { useLocation } from "react-router-dom"

interface LogoutModalProps {
    closeModal: () => void;
    src: string;
}


export function AvatarModal({closeModal, src}: LogoutModalProps) {
  const location = useLocation()
  const visible = location.search.includes("?modal=avatar")

  return <Modal isVisible={visible} closeModal={closeModal}>
    <div className={css.wrapper}>
      <h1>H11llo</h1>
    </div>
  </Modal>

  
}

