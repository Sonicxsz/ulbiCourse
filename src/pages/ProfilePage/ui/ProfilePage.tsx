import { Profile } from "entities/profile"
import css from "./ProfilePage.module.scss"
function ProfilePage() {
  return (
    <div className={css.wrapper}>
      <Profile />
    </div>
 

  )
}

export default ProfilePage