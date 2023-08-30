import React, { Suspense} from "react"
import "./styles/index.scss"
import cn from "classnames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"

function App() {
  const { theme } = useTheme()
  
  return (
    <div className={cn("app", [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
