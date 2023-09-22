import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"
import { getLoginData } from "./getLoginData"
import { DeepPartial } from "@reduxjs/toolkit"



describe("selector Login", () => {
  test("shoud return data", () => {
    const initialState: DeepPartial<StateSchema> = {
      login: {
        password: "123",
        username: "12",
        loading: false,
        error: ""
      }

    }
    expect(getLoginData(initialState as StateSchema)).toEqual({
      error: "",
      password: "123",
      username: "12",
      loading: false,
    })
  })   
})