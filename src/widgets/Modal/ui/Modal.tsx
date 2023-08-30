import Portal from "shared/ui/Portal/Portal"
import cn from "classnames"
import css from "./modal.module.scss"
import { ReactNode, useEffect } from "react"
import { useModal } from "./useModal"
import { useTheme } from "app/providers/ThemeProvider"

interface ModalProps {
  children?: ReactNode,
  isVisible?: boolean,
  closeModal: () => void
}

export function Modal({children, isVisible = false, closeModal}:ModalProps) {
  const {closing, handleClickModal, closeModalWithAnim} = useModal({closeModal, isVisible})
  const {theme} = useTheme()
  useEffect(() => {
    console.log(theme)
  }, [theme])
  return (
    <Portal>
      <div className={cn(css.wrapper, isVisible && css.visible)} onClick={closeModalWithAnim}>
        <div className={cn(css.content, isVisible && css.visible, closing && css.closing, theme)} onClick={handleClickModal}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
