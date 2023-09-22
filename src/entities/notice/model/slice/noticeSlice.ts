import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Notice, NoticeSchema } from "../types/types"


const initialState: NoticeSchema = {
  notice: [],
  id: 0
}

export const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    addNotice: (state, action: PayloadAction<Notice>) => {
      state.notice.push({...action.payload, id: state.id++})
    },
    removeNotice: (state, action:PayloadAction<{id: number}>) => {
      state.notice = state.notice.filter(el => el.id !== action.payload.id)
    }
  },
})

export const { actions: noticeActions } = noticeSlice
export const {reducer: noticeReducer} = noticeSlice