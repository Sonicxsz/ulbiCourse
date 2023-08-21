import { useEffect } from "react"
import { useTranslation } from "react-i18next"

function AboutPage() {
  const {t} = useTranslation("about")
  useEffect(() => {
    throw new Error()
  }, [])
  return (
    <div>{t("title")}</div>
  )
}

export default AboutPage