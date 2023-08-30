import { Counter } from "entities/counter"
import React from "react"
import { useTranslation } from "react-i18next"

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t("Главная страница")}
      <Counter />
    </div>
  )
}

export default MainPage
