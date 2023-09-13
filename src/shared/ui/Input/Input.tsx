import cn from "classnames"
import css from "./input.module.scss"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { spawn } from "child_process"


type BaseInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "className"|"onChange">


export enum InputTheme {
    BLACK = "black_input",
    NORMAL = "normal_input"
}

export interface InputProps extends BaseInputProps{
    className?: string,
    onChange?: (val:string) => void,
    placeholder?: string,
    theme?: InputTheme,
    value?: string | number
}

export function Input({
  className,
  onChange,
  placeholder,
  theme = InputTheme.BLACK,
  value
}:InputProps) {


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={css.wrapper}>
      {placeholder && <span>{placeholder}</span>}
      <input value={value} type="text" className={cn(css.input, className, css[theme])} onChange={handleChangeInput}/>
    </div>
  )
    
  
}
