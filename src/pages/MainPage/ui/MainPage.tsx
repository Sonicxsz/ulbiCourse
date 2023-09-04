import { Counter } from "entities/counter"
import React from "react"
import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Typography variant={TypographyVariant.MEGA}>{t("Главная страница")}</Typography>
      <Typography variant={TypographyVariant.TINY} >Good luck</Typography>
      <Typography variant={TypographyVariant.TEXT}>Good luck</Typography>
      <Typography variant={TypographyVariant.TITLE}>Good luck</Typography>
      <Counter />
    </div>
  )
}

export default MainPage
