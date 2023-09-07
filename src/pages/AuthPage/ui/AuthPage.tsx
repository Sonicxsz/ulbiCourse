
import { Suspense } from "react"
import css from "./AuthPage.module.scss"
import { AuthForm } from "feature/authorization"

function AuthPage() {


  return (
    <Suspense fallback='....'>
      <div className={css.wrapper}>
      
        <div className={css.formWrapper}>
          <AuthForm />
        </div>
      
      </div>
    </Suspense>
  )
}

export default AuthPage