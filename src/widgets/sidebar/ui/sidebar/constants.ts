import { ItemsSidebar } from "../ItemSidebar/ItemSidebar"
import HomeIcon from "shared/assets/icons/home.svg"
import AboutIcon from "shared/assets/icons/about.svg"
import ProfileIcon from "shared/assets/icons/profile.svg"

import { RoutePath } from "shared/config/routeConfig/routeConfig"

export const sideBarItems: ItemsSidebar[] = [
  {
    path: RoutePath.main,
    title: "Главная",
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    title: "О сайте",
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    title: "profile",
    Icon: ProfileIcon
  }
]