
import axios from "axios"
import { loginByUserName } from "./loginByUserName"
import { TestAsyncThunk } from "shared/lib/tests/renderWithTranslation/TestAsyncThunk"
import { userActions } from "entities/User"


jest.mock("axios")

const mockedAxios = jest.mocked(axios, true)

describe("LoginByUserName", () => {
 

  test("success login", async() => {
    const userValue = {
      id: "1",
      username: "123"
    }
    mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ password: "123", username: "admin" })

    expect(result.payload).toEqual(userValue)
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(thunk.dispatch).toBeCalledTimes(3)
    expect(thunk.dispatch).toBeCalledWith(userActions.setUser(userValue))

  })

 
})