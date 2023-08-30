import Portal from "shared/ui/Portal/Portal"
import cn from "classnames"
import css from "./modal.module.scss"
import { ReactNode } from "react"
import { useModal } from "./useModal"

interface ModalProps {
  children?: ReactNode,
  isVisible?: boolean,
  closeModal: () => void
}

export function Modal({children, isVisible = false, closeModal}:ModalProps) {
  const {closing, handleClickModal, closeModalWithAnim} = useModal({closeModal, isVisible})

  return (
    <Portal>
      <div className={cn(css.wrapper, isVisible && css.visible)} onClick={closeModalWithAnim}>
        <div className={cn(css.content, isVisible && css.visible, closing && css.closing)} onClick={handleClickModal}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
