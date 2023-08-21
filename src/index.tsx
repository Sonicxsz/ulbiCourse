import {render} from "react-dom"
import App from "./app/App"
import {BrowserRouter} from "react-router-dom"
import {ThemeProvider} from "app/provider/ThemeProvider/"
import "./shared/config/u18n/i18n"
import ErrorBoundary from "app/errorBundery/ErrorBoundary"
render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root"),
)
