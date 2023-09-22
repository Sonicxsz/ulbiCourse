import React from "react"


import { useSelector } from "react-redux"
import { getNotices } from "../model/selectors/getNotices"
import Notice from "shared/ui/notice/Notice"
import Portal from "shared/ui/Portal/Portal"
import css from "./style.module.scss"
function NoticeContainer() {
  const notices = useSelector(getNotices)
  const maxNotices = notices.filter((el, ind) => ind < 5)
  if(!notices){
    return null
  }
  return (
    <Portal>
      <div className={css.wrapper}>
        {maxNotices.map(i => {
          return <Notice key={i.id} id={i.id} delay={i.delay}>{i.message}</Notice>
        })}
      </div>
    </Portal>
 
  )
}

export default NoticeContainer