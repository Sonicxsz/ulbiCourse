import { AsyncThunkAction } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"


type ActionCreatorType<Return, Arg, Reject> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue:Reject}>

export class TestAsyncThunk<Return, Arg, Reject> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, Reject>

  constructor(actionCreater: ActionCreatorType<Return, Arg, Reject>){
    this.actionCreator = actionCreater
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }


  async callThunk(arg:Arg){
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}