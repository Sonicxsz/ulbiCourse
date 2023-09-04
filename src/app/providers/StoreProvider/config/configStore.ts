import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./stateSchema"
import { counterReducer } from "entities/counter/model/slice/CounterSlice"
import { loginReducer } from "feature/authorization"
import { useDispatch } from "react-redux"
import { userReducer } from "entities/User"



export const createReduxStore= (initialState?: StateSchema) => {
  
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })  
  
}


const store = createReduxStore()
type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch

export const useAppDispatch: DispatchFunc = useDispatch
