import { useTranslation } from "react-i18next"
import css from "./notFound.module.scss"
export function NotFound() {
  const {t} = useTranslation()
  return (
    <div className={css.wrapper}>
      {t("page not found")}
    </div>
  )
}
