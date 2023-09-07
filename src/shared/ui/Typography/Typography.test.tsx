import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { Typography } from "./Typography"


describe("Typography", () => {
  test("render", () => {
    render(<Typography>Hello</Typography>)
    expect(screen.getByTestId("Typography")).toBeInTheDocument()
    expect(screen.getByTestId("Typography")).toHaveTextContent("Hello")
  })
})