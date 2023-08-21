import {render, screen} from "@testing-library/react"
import Button, { ButtonTheme } from "./Button"


describe("Button", () => {
  test("render", () => {
    render(<Button>Hello</Button>)
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })
  test("with theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Hello</Button>)
    expect(screen.getByTestId("button")).toHaveClass("clear")
  })
})