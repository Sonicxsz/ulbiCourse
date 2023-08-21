import cn from "classnames"
import css from "./button.module.scss"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classname?: string,
    theme?: ButtonTheme,
    children?: React.ReactNode
}

export enum ButtonTheme {
    CLEAR = "clear"
}


function Button({children, classname, theme = ButtonTheme.CLEAR, ...rest}:ButtonProps) {
  return (
    <button data-testid="button" className={cn(css.wrapper, css[theme], classname)} {...rest}>
      {children}
    </button>
  )
}


export default Button