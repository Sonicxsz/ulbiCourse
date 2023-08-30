import { configureStore, DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "./stateSchema"
import { counterReducer } from "entities/counter/model/slice/CounterSlice"



export const createReduxStore= (initialState?: StateSchema) => {


  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}