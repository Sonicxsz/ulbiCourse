import { screen} from "@testing-library/react"
import { LangSwitcher } from "./LangSwitcher"
import { renderWithI18n } from "shared/lib/test/renderWith18n/RenderWithI18n"


describe("LangSwitcher", () => {
  test("render", () => {
    renderWithI18n(<LangSwitcher />),
    expect(screen.getByTestId("langSwitcher")).toBeInTheDocument()
  })
})
