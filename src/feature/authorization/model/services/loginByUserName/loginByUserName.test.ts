
import { loginByUserName } from "./loginByUserName"
import { TestAsyncThunk } from "shared/lib/tests/renderWithTranslation/TestAsyncThunk"


jest.mock("axios")


describe("LoginByUserName", () => {
  test("success login", async() => {
    const userValue = { username: "123", id: "1" }

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk({ username: "123", password: "123" })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(userValue)
  })

 
})