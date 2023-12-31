import cn from "classnames"
import { Link, LinkProps } from "react-router-dom"
import { FC } from "react"
import cls from "./appLink.module.scss"

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={cn(cls.AppLink, [cls[theme]], [className])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
