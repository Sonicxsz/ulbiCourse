import { fireEvent, screen} from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithI18n } from "shared/lib/test/renderWith18n/RenderWithI18n"


describe("Sidebar", () => {
  test("render", () => {
    renderWithI18n(<Sidebar />),
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })

  test("collapse", () => {
    renderWithI18n(<Sidebar />),
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")

    fireEvent.click(screen.getByTestId("sidebar-toggle"))
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed")
  })
})
