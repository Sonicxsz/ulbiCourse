import cn from "classnames"
import { ButtonHTMLAttributes, FC } from "react"
import cls from "./button.module.scss"

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    PRIMARY = "primary",
    OUTLINE_INVERTED = "outlineInverted"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={cn(cls.Button, [cls[theme]], [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
