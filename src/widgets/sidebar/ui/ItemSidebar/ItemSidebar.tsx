import React from "react"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import css from "./itemSidebar.module.scss"
import { useTranslation } from "react-i18next"
import cn from "classnames"
export interface ItemsSidebar {
    path: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    title: string
}

interface ItemSidebarProps extends ItemsSidebar {
    collapsed: boolean
}


function ItemSidebar({path, Icon, title, collapsed}:ItemSidebarProps) {
  const {t} = useTranslation()

  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={path} className={cn(css.linkWrapper, collapsed && css.collapsed)}>
      <Icon className={css.icon}/>
      <span>
        {t(title)}
      </span>
    </AppLink>
  )
}

export default React.memo(ItemSidebar)