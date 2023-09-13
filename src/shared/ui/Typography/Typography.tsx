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

export function Typography({children, variant = TypographyVariant.TEXT}:TypographyProps) {
  return (
    <p data-testid="Typography" className={cn(css.wrapper, css[variant])}>{children}</p>
  )
}
