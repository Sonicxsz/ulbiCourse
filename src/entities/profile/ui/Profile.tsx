import { Button, ThemeButton } from "shared/ui/Button/Button"
import { useProfile } from "./useProfile"
import css from "./Profile.module.scss"
import { useTranslation } from "react-i18next"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Input } from "shared/ui/Input/Input"

export function Profile() {
  const {profile, loading, error} = useProfile()
  const {t} = useTranslation("profile")
  

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Typography variant={TypographyVariant.TITLE}>Ваш профиль</Typography>
        <Button theme={ThemeButton.OUTLINE} className={css.editBtn}>{t("edit profile")}</Button>
      </div>

      <div className={css.content}>
        <Input placeholder={t("your name")} value={profile?.first}/>
        <Input placeholder={t("your lastname")} value={profile?.lastname}/>
        <Input placeholder={t("your age")} value={profile?.age}/>
      </div>
    </div>
  )
}
