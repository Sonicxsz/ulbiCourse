import cn from "classnames"
import { ButtonHTMLAttributes, FC } from "react"
import css from "./button.module.scss"

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    PRIMARY = "primary",
    OUTLINE_INVERTED = "outlineInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    disabled,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={cn(css.Button, [css[theme]], [className], {
        [css.disabled]: disabled
      })}
      {...otherProps}
    >
      {children}
    </button>
  )
}
