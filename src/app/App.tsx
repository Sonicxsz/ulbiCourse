import { Suspense} from "react"
import "./styles/index.scss"
import cn from "classnames"

import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"
import { useCheckLoginUser } from "../shared/hooks/useCheckLoginUser"
import AuthPage from "pages/AuthPage/ui/AuthPage"

function App() {
  const { theme } = useTheme()
  const {isUserLogin} = useCheckLoginUser()


  if(!isUserLogin){
    return (
      <AuthPage />
    )
  }

 

  return (
    <Suspense fallback="">
      <div className={cn("app", [theme])}>
        <Navbar /> 
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>

  )
}

export default App
