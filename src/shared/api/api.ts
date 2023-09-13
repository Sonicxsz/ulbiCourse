import axios from "axios"
import { USER_DATA_FROM_LOCAL } from "shared/constants/AuthUser"



export const $api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    authorization: localStorage.getItem(USER_DATA_FROM_LOCAL)
  }
})

