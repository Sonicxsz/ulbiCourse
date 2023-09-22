import { userActions } from "entities/User"
import { TestAsyncThunk } from "shared/lib/tests/renderWithTranslation/TestAsyncThunk"
import { getProfile } from "./getProfile"
import { Country, Currency } from "shared/types/common"


const data = {
  username: "admin",
  age: 22,
  country: Country.RUSSIA,
  lastname: "ulbi tv",
  first: "asd",
  city: "asf",
  currency: Currency.USD,
}

describe("fetchProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(getProfile)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(data)
  })

  test("error login", async () => {
    const thunk = new TestAsyncThunk(getProfile)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe("rejected")
  })
})
