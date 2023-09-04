import cn from "classnames"
import css from "./navbar.module.scss"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { useNavbar } from "./useNavbar"
import { LogoutModal } from "widgets/LogoutModal"

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {


  const {logoutModalProps} = useNavbar()

  
  return (
    <>
      <div className={cn(css.Navbar, [className])}>
        <Button onClick={logoutModalProps.openLogoutModal} className={css.loginBtn} theme={ThemeButton.OUTLINE_INVERTED}>
          Logout
        </Button>      
      </div>

      <LogoutModal isVisible={logoutModalProps.logoutModal} closeModal={logoutModalProps.closeLogoutModal}/>
    </>
  )
}
