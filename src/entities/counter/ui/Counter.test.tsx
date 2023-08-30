import { fireEvent, screen } from "@testing-library/react"
import { renderComponent } from "shared/lib/tests/renderWithTranslation/renderComponent"
import { Counter, CounterSchema } from ".."
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"


describe("Sidebar test", () => {
  test("with only first param", () => {
    const initialState: DeepPartial<StateSchema> = {
      counter: {value: 10}
    }
    renderComponent(<Counter />, {initialState})
    expect(screen.getByTestId("counter-title")).toHaveTextContent("10")
  })

  test("increment btn", () => {
    const initialState: DeepPartial<StateSchema> = {
      counter: {value: 10}
    }
    renderComponent(<Counter />, {initialState})
    fireEvent.click(screen.getByTestId("inc-btn"))

    expect(screen.getByTestId("counter-title")).toHaveTextContent("11")
  })

  test("decrement btn", () => {
    const initialState: DeepPartial<StateSchema> = {
      counter: {value: 10}
    }
    renderComponent(<Counter />, {initialState})
    fireEvent.click(screen.getByTestId("dec-btn"))
    expect(screen.getByTestId("counter-title")).toHaveTextContent("9")
  })

 
})
