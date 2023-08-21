import {useTranslation} from "react-i18next"
import Button from "shared/ui/Button/Button"
import css from "./langSwitcher.module.scss"

export function LangSwitcher() {
  const {t, i18n} = useTranslation()
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <Button data-testid="langSwitcher" onClick={toggleLang} classname={css.wrapper}>
      {t("lang")}
    </Button>
  )
}
