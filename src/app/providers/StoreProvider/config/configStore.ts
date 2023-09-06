import { configureStore } from "@reduxjs/toolkit"
import { ReduxStoreWithManager, StateSchema } from "./stateSchema"
import { counterReducer } from "entities/counter/model/slice/CounterSlice"
import { useDispatch } from "react-redux"
import { userReducer } from "entities/User"
import {ReducersMapObject} from "@reduxjs/toolkit"
import { createReducerManager } from "./reduxManager"





export const createReduxStore= ( 
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): ReduxStoreWithManager => {
  
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }


  const reduceManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reduceManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
  

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reduceManager
  
  return store as ReduxStoreWithManager
  
}


// const store = createReduxStore()
// type AppDispatch = typeof store.dispatch
// type DispatchFunc = () => AppDispatch

export const useAppDispatch = useDispatch




