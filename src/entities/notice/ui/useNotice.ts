import { useAppDispatch } from "app/providers/StoreProvider"
import { noticeActions } from "../model/slice/noticeSlice"




export const useNotice = () => {
  const dispatch = useAppDispatch()
  let id = 0
  const notice = (message: string, delay = 5000) => {
    dispatch(noticeActions.addNotice({message, id:id++, delay}))
  }

  return notice
}