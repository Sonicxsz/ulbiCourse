import cn from "classnames"
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import css from "./Sidebar.module.scss"
import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import HomeIcon from "shared/assets/icons/home.svg"
import AboutIcon from "shared/assets/icons/about.svg"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
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
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={css.linkWrapper}>
          <HomeIcon className={css.icon}/>
          <span>
            {t("Главная")}
          </span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={css.linkWrapper}>
          <AboutIcon className={css.icon}/>
          <span >
            {t("О сайте")}
          </span>
        </AppLink>
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
