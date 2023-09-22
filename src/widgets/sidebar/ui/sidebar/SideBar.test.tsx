import { fireEvent, screen } from "@testing-library/react"
import { renderComponent } from "shared/lib/tests/renderWithTranslation/renderComponent"
import { Sidebar } from "widgets/sidebar"


describe("Sidebar test", () => {
  test("with only first param", () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })

  test("test toggle", () => {
    renderComponent(<Sidebar />)
    const toggleBtn = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed")

  })
})
