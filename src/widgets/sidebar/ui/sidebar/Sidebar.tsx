import {useState} from "react"
import cn from "classnames"
import css from "./sidebar.module.scss"
import Button from "shared/ui/Button/Button"
import {ThemeSwitcher} from "widgets/themeSwitcher"
import {LangSwitcher} from "widgets/langSwitcher"

type SidebarProps = {
	classname?: string;
};

export function Sidebar({classname}: SidebarProps) {
  const [collapse, setCollapse] = useState(true)
  const toggleCollapse = () => {
    setCollapse(val => !val)
  }

  return (
    <div data-testid="sidebar" className={cn(css.wrapper, classname, {
      [css.collapsed]: collapse,
    })}>
      <Button data-testid="sidebar-toggle" onClick={toggleCollapse}>toggle</Button>
      <div className={cn(css.switchers)}>
        <ThemeSwitcher/>
        <LangSwitcher />
      </div>
    </div>
  )
}
