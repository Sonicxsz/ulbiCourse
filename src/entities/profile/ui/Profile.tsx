import { useProfile } from "./useProfile"
import css from "./Profile.module.scss"
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input/Input"
import { Header } from "./header/Header"
import { Shimmer } from "shared/ui/Shimmer/Shimmer"
import Select from "shared/ui/Select/Select"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import Notice from "shared/ui/notice/Notice"
import { useNotice } from "entities/notice/ui/useNotice"
import { useEffect } from "react"
import Avatar, { AvatarSize } from "shared/ui/Avatar/Avatar"
import { AvatarModal } from "./avatarModal/Modal/AvatarModal"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const {profile, 
    loading, 
    error, 
    editable,
    countryOptions,
    currencyOptions, 
    handleChangeEdit,
    handleChangeProfile,
    handleCancelChanges,
    handleSaveChanges,
  } = useProfile()
  const {t} = useTranslation("profile")
  const notice = useNotice()
  const isFirstLoading = loading && !profile
  const navigate = useNavigate()
  useEffect(() => {
    error?.map(i => notice(t(i)))
  }, [error])
  const handleOpenAvatarModal = () => {
    navigate("?modal=avatar")
  }
  const handleCloseAvatartModal = () => {
    console.log("hje")
    navigate(-1)
  }
  return (
    <div className={css.wrapper}>
      <Header loading={loading} handleCancel={handleCancelChanges} handleEdit={editable ? handleSaveChanges : handleChangeEdit} title="Ваш профиль" editable={editable}/>

      <div className={css.content}>
       
        {isFirstLoading
          ? <Shimmer height={390}/>
          : <>
            <Avatar onClick={handleOpenAvatarModal} editable={editable} src={profile?.avatar} size={AvatarSize.MEDIUM}/>
            <Input onChange={handleChangeProfile("first")} name="first" readonly={!editable} placeholder={t("your name")} value={profile?.first}/>
            <Input onChange={handleChangeProfile("lastname")} name="lastname" readonly={!editable} placeholder={t("your lastname")} value={profile?.lastname}/>
            <Input onChange={handleChangeProfile("age")} readonly={!editable} placeholder={t("your age")} value={profile?.age}/>
            <Input onChange={handleChangeProfile("city")} readonly={!editable} placeholder={t("your city")} value={profile?.city}/>
            <Select onChange={handleChangeProfile("currency")} readonly={!editable} value={profile?.currency} placeholder={t("currency")} options={currencyOptions}/>
            <Select onChange={handleChangeProfile("country")} readonly={!editable} value={profile?.country} placeholder={t("country")} options={countryOptions}/>
          </>
        }
      </div>
      <AvatarModal src="ss" closeModal={handleCloseAvatartModal}/>
    </div>
  )
}
