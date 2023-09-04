import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { Input, InputTheme } from "shared/ui/Input/Input"
import css from "./AuthForm.module.scss"
import { useAuthForm } from "./useAuthForm"
import { Loader } from "shared/ui/Loader/Loader"
import cn from "classnames"
export function AuthForm() {
  const {t} = useTranslation()
  const { username, 
    loading,
    password,
    handleChangeUserName,
    handleChangePassword,
    handleClickSendBtn
  } = useAuthForm()


  return (
    <div className={cn(css.wrapper, loading && css.wrapperLoading)}>
      <Input placeholder={t("username")}
        value={username}
        onChange={handleChangeUserName}
        theme={InputTheme.NORMAL}
      />
      <Input placeholder={t("password")}
        className={css.input}
        value={password}
        onChange={handleChangePassword}
        theme={InputTheme.NORMAL}
      />
      <Button disabled={loading} onClick={handleClickSendBtn} theme={ThemeButton.OUTLINE} className={css.authBtn}>{t("login")}</Button>
      {loading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
    </div>
  )
}
