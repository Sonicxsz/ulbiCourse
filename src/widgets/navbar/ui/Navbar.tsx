import cn from "classnames"
import cls from "./navbar.module.scss"
import { Modal } from "widgets/Modal"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { useCallback, useState } from "react"

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [showModal, setShowModal] = useState(false)
  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const openModal = useCallback(() => {
    setShowModal(true)
  },[])
  return (
    <div className={cn(cls.Navbar, [className])}>
      <Button onClick={openModal} theme={ThemeButton.OUTLINE_INVERTED}>
        OPEN MODAL
      </Button>

      <Modal closeModal={closeModal} isVisible={showModal}>Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non reprehenderit perspiciatis earum quidem iste, magni dolore ipsum animi quo reiciendis ex esse in quis, quasi exercitationem culpa tempora adipisci labore.</Modal>
      
    </div>
  )
}
