import { AsyncThunkAction } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"
import axios, { AxiosStatic } from "axios"
jest.mock("axios")

type ActionCreatorType<Return, Arg, Reject> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue:Reject}>
const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>

  constructor(actionCreater: ActionCreatorType<Return, Arg, RejectedValue>, state?: Partial<StateSchema>){
    this.actionCreator = actionCreater
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.api = mockedAxios
  }


  async callThunk(arg:Arg){
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api },
    )

    return result
  }
}