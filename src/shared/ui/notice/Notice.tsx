import { useTheme } from "app/providers/ThemeProvider"
import css from "./style.module.scss"
import cn from "classnames"
import { useEffect } from "react"
import { useAppDispatch } from "app/providers/StoreProvider"
import { noticeActions } from "entities/notice"

function Notice({children, delay, id}:{children:React.ReactNode, delay: number, id:number}) {
  const {theme} = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(noticeActions.removeNotice({id}))
    }, delay)

  }, [])


  return (
    <div className={cn(css.wrapper, theme)}>
      {children}
    </div>
  )
}

export default Notice