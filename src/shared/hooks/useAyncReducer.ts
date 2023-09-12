import { Reducer } from "@reduxjs/toolkit"
import { useAppDispatch } from "app/providers/StoreProvider"
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/stateSchema"
import { useEffect } from "react"
import { useStore } from "react-redux"


interface UseAsyncReducerProps {
    key: StateSchemaKey,
    reducer: Reducer
}


export const useAsyncReducer = (asynReducers:UseAsyncReducerProps[]) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()
  useEffect(() => {
    asynReducers.forEach(i => {
      store.reducerManager.add(i.key, i.reducer)
      dispatch({type: "@init login form"})
    })
  }, [])
}