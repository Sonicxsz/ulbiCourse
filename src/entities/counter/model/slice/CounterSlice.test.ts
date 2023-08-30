import { CounterSchema } from "../types/counterSchema"
import { counterActions, counterReducer } from "./CounterSlice"

describe("counter slice test", () => {



  test("increment", () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(counterReducer(state, counterActions.increment)).toEqual({"value": 11})
  })
  test("decrement", () => {
    const state: CounterSchema = {
      value: 10
    }
  
    expect(counterReducer(state, counterActions.decrement)).toEqual({"value": 9})
  })

  test("without state", () => {
    const state: any = undefined
    expect(counterReducer(state, counterActions.increment)).toEqual({"value": 1})
  })
})