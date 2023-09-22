import css from "./header.module.scss"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"

interface HeaderProps {
    title: string,
    editable?: boolean,
    loading?: boolean,
    handleEdit?: () => void,
    handleCancel?: () => void

}

export function Header({title, editable,loading, handleEdit, handleCancel}:HeaderProps) {
  const {t} = useTranslation("profile")

  return (
    <div className={css.header}>
      <Typography variant={TypographyVariant.TITLE}>{title}</Typography>
      <div className={css.control}>
        {editable && <Button disabled={loading} onClick={handleCancel} theme={ThemeButton.WARNING} className={css.editBtn}>{t("cancel")}</Button>}
        
        <Button disabled={loading} onClick={handleEdit} theme={ThemeButton.OUTLINE} className={css.editBtn}>{t(editable ? "save" :"edit profile")}</Button>
      </div>
    </div>
  )
}

