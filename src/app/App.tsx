import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { useTheme } from "app/provider/ThemeProvider/"
import "./styles/index.scss"
import { RoutesConfig } from "shared/config/routeConfig/routeConfig"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"
import PageLoader from "widgets/pageLoader/ui/PageLoader"

const App = () =>{
  const {theme} = useTheme()
  
  return (
    <Suspense fallback={""}>
      <div className={`app ${theme}`}>
        <Navbar/>
        <div className='page-wrapper'>
          <Sidebar />
          <div className='page-content'>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {RoutesConfig.map(({path, element}) => {
                  return <Route key={path} path={path} element={element} />
                })}
              </Routes>
            </Suspense>

          </div>
        
        </div>
        
      </div>
    </Suspense>
  )
}

export default App