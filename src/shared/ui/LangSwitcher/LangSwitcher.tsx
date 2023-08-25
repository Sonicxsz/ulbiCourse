import cn from "classnames"
import { useTranslation } from "react-i18next"
import React from "react"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import css from "./langSwitcher.module.scss"
interface LangSwitcherProps {
    className?: string;
    collapsed?: boolean;
}

export const LangSwitcher = ({ className, collapsed }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <Button
      className={cn(css.wrapper, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {collapsed ? t("lang short") : t("Язык")}
    </Button>
  )
}
