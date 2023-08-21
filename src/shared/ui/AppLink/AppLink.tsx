import { Link, LinkProps } from "react-router-dom"
import cn from "classnames"
import css from "./appLink.module.scss"

export enum AppLinkTheme {
    LIGHT = "light",
    DARK = "dark"
}

interface AppLinkProps extends LinkProps{
    classname?: string,
    theme?: AppLinkTheme
}

function AppLink ({children, to, classname, theme = AppLinkTheme.LIGHT, ...rest}:AppLinkProps) {
  return (
    <Link to={to} className={cn(css.wrapper, css[theme], classname)} {...rest}>
      {children}
    </Link>
  )
}

export default AppLink