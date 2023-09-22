import { Suspense} from "react"
import "./styles/index.scss"
import cn from "classnames"

import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"
import { useCheckLoginUser } from "../shared/hooks/useCheckLoginUser"
import AuthPage from "pages/AuthPage/ui/AuthPage"
import NoticeContainer from "entities/notice/ui/NoticeContainer"

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
          <NoticeContainer/>
        </div>
      </div>
    </Suspense>

  )
}

export default App
