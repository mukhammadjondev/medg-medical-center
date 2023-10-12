import { Blogs, Hero, Services } from "../components"
import FAQ from "../components/FAQ"
import Partners from "../components/partners"
import TeamMembers from "../components/team-members"

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Blogs />
      <TeamMembers />
      <Partners />
      <FAQ />
    </>
  )
}

export default Home