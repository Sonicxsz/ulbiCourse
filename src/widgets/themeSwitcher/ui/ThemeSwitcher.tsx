import cn from "classnames"
import css from "./themeSwitcher.module.scss"
import {Theme, useTheme} from "app/provider/ThemeProvider"
import Button from "shared/ui/Button/Button"
import Light from "shared/assets/svg/theme-light.svg"
import Dark from "shared/assets/svg/theme-dark.svg"

export function ThemeSwitcher() {
  const {theme, toggleTheme} = useTheme()
  return (
    <Button onClick={toggleTheme} classname={cn(css.wrapper)}>
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  )
}
