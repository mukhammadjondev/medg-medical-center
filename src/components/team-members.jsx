import { styled } from "styled-components"
import { teamMembers } from "../constants/team-members"
import TeamMemberCard from "./team-member-card"

const TeamMembers = () => {
  return (
    <section style={{backgroundColor: 'var(--bg-secondary)'}}>
      <Container className="container">
        <h2 className="title">Наша команда</h2>
        <CardWrapper>
          {teamMembers.map(member => (
            <TeamMemberCard member={member} key={member.id} />
          ))}
        </CardWrapper>
      </Container>
    </section>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
`

export default TeamMembers