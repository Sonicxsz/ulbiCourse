import cn from "classnames"
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import css from "./sidebar.module.scss"
import { useTranslation } from "react-i18next"

import ItemSidebar from "../ItemSidebar/ItemSidebar"
import { sideBarItems } from "./constants"


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const {t} = useTranslation()
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  

  return (
    <div
      data-testid="sidebar"
      className={cn(css.Sidebar, {[css.collapsed]: collapsed }, [className])}
    >
      <div className={css.links}>
        {sideBarItems.map((i, ind) => {
          return <ItemSidebar collapsed={collapsed} key={ind} path={i.path} title={i.title} Icon={i.Icon} />
        })}
       
     
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cn(css.square, css.collapseBtn)}
        theme={ThemeButton.PRIMARY}
      >
        { collapsed ? ">" : "<"}
      </Button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={css.lang} collapsed={collapsed} />
      </div>


    </div>
  )
}
