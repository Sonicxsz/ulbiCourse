import cn from "classnames"
import css from "./typography.module.scss"

interface TypographyProps {
    children: React.ReactNode,
    variant?: TypographyVariant,
}


export enum TypographyVariant {
    TINY = "tiny",
    TEXT = "text",
    TITLE = "title",
    MEGA = "mega"

}

export function Typography({children, variant}:TypographyProps) {
  return (
    <p className={cn(css.wrapper, css[variant])}>{children}</p>
  )
}
