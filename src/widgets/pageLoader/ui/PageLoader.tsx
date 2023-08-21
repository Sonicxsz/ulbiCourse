import Loader from "shared/ui/Loader/Loader"
import css from "./PageLoader.module.scss"
function PageLoader() {
  return (
    <div className={css.wrapper}>
      <Loader />
    </div>
  )
}

export default PageLoader