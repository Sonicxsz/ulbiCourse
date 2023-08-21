import cn from "classnames"
import css from "./navbar.module.scss"
import AppLink from "shared/ui/AppLink/AppLink"



export function Navbar() {


  return (
    <div className={cn(css.wrapper)}>
      <div className={css.links}>
        <AppLink classname={css.marginRight} to={"/"}>main</AppLink>
        <AppLink to={"/about"}>about</AppLink>
      </div>
    </div>
  )
}
