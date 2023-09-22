import React, { ChangeEvent } from "react"
import css from "./style.module.scss"
import cn from "classnames"

interface SelectProps {
  value?: string,
  placeholder?:string,
  options?: {
    value: string,
    content: string
  }[],
  onChange?: (val: string) => void,
  readonly?: boolean
}

function Select({ onChange, options, placeholder, value, readonly}:SelectProps) {

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value && onChange){
      onChange(e.target.value)
    }
  }

  return (
    <div className={css.wrapper}>
      {placeholder && <span>{placeholder}</span>}
      <select disabled={readonly} className={cn(css.select, readonly && css.readonly)} value={value} onChange={handleChange} >
        {options?.map(elem => {
          return <option key={elem.value} className={css.option} value={elem.value}>{elem.content}</option>
        })}
      </select>
    </div>
    
  )
}

export default React.memo(Select)