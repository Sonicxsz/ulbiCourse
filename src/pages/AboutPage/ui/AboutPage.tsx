import { useTranslation } from "react-i18next"
import {Input} from "shared/ui/Input/Input"

const AboutPage = () => {
  const { t } = useTranslation("about")

  return (
    <div>
      {t("О сайте")}
      <Input placeholder="hello world" />
    </div>
  )
}

export default AboutPage
