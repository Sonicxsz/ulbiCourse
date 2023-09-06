import {lazy} from "react"
const AuthForm = lazy(() => import("./ui/authForm/AuthForm"))
export {loginActions, loginReducer} from "./model/slice/loginSlice"
export {LoginSchema} from "./model/types/loginSchema"
export {loginByUserName} from "./model/services/loginByUserName/loginByUserName"

export {AuthForm} 
