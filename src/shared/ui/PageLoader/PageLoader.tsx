import cn from "classnames"
import { Loader } from "shared/ui/Loader/Loader"
import cls from "./PageLoader.module.scss"

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cn(cls.PageLoader, [className])}>
    <Loader />
  </div>
)
