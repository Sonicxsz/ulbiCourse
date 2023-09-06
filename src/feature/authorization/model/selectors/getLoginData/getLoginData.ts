import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"
import { initialState } from "../../slice/loginSlice"

export const getLoginData = (state:StateSchema) => state?.login || initialState