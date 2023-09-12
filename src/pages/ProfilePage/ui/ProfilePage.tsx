import { Profile } from "entities/profile"
import { Suspense } from "react"

function ProfilePage() {
  return (
    <Suspense fallback='...'>
      <Profile />

    </Suspense>
  )
}

export default ProfilePage