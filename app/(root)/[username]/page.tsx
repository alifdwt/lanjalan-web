import ProfileHeader from "@/components/shared/ProfileHeader"
import { fetchUserByUsername } from "@/lib/actions/user.action"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

interface ProfilePageProps {
    params: {
        username: string
    }
}

const ProfilePage: React.FC<ProfilePageProps> = async ({ params }) => {
  const user = await currentUser()
  if (!user) return null

  const userInfo = await fetchUserByUsername(params.username)
  if (!userInfo?.onboarded) redirect("/onboarding")

  return (
    <section>
        <ProfileHeader
          accountId={userInfo.id}
          authUserId={user.id}
          name={userInfo.name}
          username={userInfo.username}
          imgUrl={userInfo.image}
          bio={userInfo.bio}
        />
    </section>
  )
}

export default ProfilePage