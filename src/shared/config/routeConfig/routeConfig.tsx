import { RouteObject } from "react-router-dom"
import {MainPageLazy as MainPage} from "pages/main"
import { AboutPageLazy as AboutPage } from "pages/about"
import {NotFound} from "pages/notFound"


const enum RoutesName {
    ABOUT = "about",
    MAIN = "main",
    NOTFOUND = "notFound"
}

const RoutePath: Record<RoutesName, string> = {
  [RoutesName.MAIN]: "/",
  [RoutesName.ABOUT]: "/about",
  [RoutesName.NOTFOUND]: "*"
}


export const RoutesConfig: RouteObject[] = [
  {
    path: RoutePath.about,
    element: <AboutPage />
  },
  {
    path: RoutePath.main,
    element: <MainPage />
  },
  {
    path: RoutePath.notFound,
    element: <NotFound />
  }

]