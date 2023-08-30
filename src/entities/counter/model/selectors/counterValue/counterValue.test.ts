import { DeepPartial } from "@reduxjs/toolkit"
import { counterValue } from "./counterValue"
import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"


describe("counter selector test", () => {
  test("shoud return value", () => {
    const initialState: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    expect(counterValue(initialState as StateSchema)).toBe(10)
  })
})