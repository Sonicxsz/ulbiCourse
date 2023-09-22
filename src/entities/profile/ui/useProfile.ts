import { useAsyncReducer } from "shared/hooks/useAyncReducer"
import { profileActions, profileReducer } from "../model/slice/ProfileSlice"
import { useSelector } from "react-redux"
import { getProfileData } from "../model/selectors/getProfileData"
import { getProfileLoading } from "../model/selectors/getProfileLoading"
import { getProfileError } from "../model/selectors/getProfileError"
import { useAppDispatch } from "app/providers/StoreProvider"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { getProfile } from "../model/service/getProfile/getProfile"
import { getProfileEditable } from "../model/selectors/getProfileEditable"
import { ProfileType } from "../model/types/profile"
import { updateProfile } from "../model/service/updateProfile/updateProfile"
import { Country, Currency } from "shared/types/common"
import { useNotice } from "entities/notice/ui/useNotice"
import { useTranslation } from "react-i18next"



export const useProfile = () => {
  useAsyncReducer([{
    key:"profile", reducer:profileReducer
  }])
  const data = useSelector(getProfileData)
  const loading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)
  const editable = useSelector(getProfileEditable)
  const copy = useRef<null | ProfileType>(null)
  const dispatch = useAppDispatch()
  const notice = useNotice()
  const {t} = useTranslation("profile")


  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getProfile())
  }, [dispatch])

  useEffect(() => {
    if(editable && data){
      copy.current = data
    }
  }, [editable])

  const handleChangeEdit = useCallback(() => {
    dispatch(profileActions.changeEditable())
  }, [dispatch])

  const handleChangeProfile = (fieldName: keyof ProfileType) => (val: string) => {
    dispatch(profileActions.changeProfile({[fieldName]: val}))
  }

  const handleCancelChanges = useCallback(() => {
    if(copy.current){
      dispatch(profileActions.changeProfile(copy.current))
      dispatch(profileActions.changeEditable())
    }
  }, [dispatch])


  const handleSaveChanges = useCallback(() => {
    if(error?.length){
      notice(t("Неправильный ввод данных"))
    }else{
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(updateProfile(data))
      dispatch(profileActions.changeEditable())
    }


  }, [data])
 

  const currencyOptions = useMemo(() => {
    return Object.entries(Currency).map(el => {
      return {value: el[0], content: String(el[1])}
    })
  },[])

  const countryOptions = useMemo(() => {
    return Object.entries(Country).map(el => {
      return {value: el[0], content: String(el[1])}
    })
  },[])

  return {
    profile: data,
    loading,
    error, 
    editable,
    countryOptions,
    currencyOptions,
    handleChangeEdit,
    handleChangeProfile,
    handleCancelChanges,
    handleSaveChanges,

  }
}