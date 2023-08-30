import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/configStore"
import { StateSchema } from "../config/stateSchema"
import { DeepPartial } from "@reduxjs/toolkit"

interface StoreProps {
  children: ReactNode,
  initialState?: DeepPartial<StateSchema>,
}
export const StoreProvider = ({children, initialState}: StoreProps) => {

  return (
    <Provider store={createReduxStore(initialState as StateSchema)}>
      {children}
    </Provider>
  )
}


