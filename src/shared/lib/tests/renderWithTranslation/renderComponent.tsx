import { ReactNode } from "react"
import { render } from "@testing-library/react"
import { I18nextProvider } from "react-i18next"
import i18nForTests from "shared/config/i18n/i18nForTests"
import { MemoryRouter } from "react-router-dom"
import { StoreProvider } from "app/providers/StoreProvider"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"

interface optionsProps {
    path?: string,
    initialState?: DeepPartial<StateSchema>
}

export function renderComponent(component: ReactNode, options?:optionsProps) {
  
  return render(
    <StoreProvider initialState={options.initialState}>
      <MemoryRouter basename="/">
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
