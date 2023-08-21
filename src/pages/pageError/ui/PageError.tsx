import React from "react"
import css from "./pageError.module.scss"
import { useTranslation } from "react-i18next"
export function PageError() {
  const {t} = useTranslation()
  return (
    <div className={css.wrapper}>
      {t("error page")}
    </div>
  )
}
