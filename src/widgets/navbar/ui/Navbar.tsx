import cn from "classnames"
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  return (
    <div className={cn(cls.Navbar, [className])}>
      
    </div>
  )
}
