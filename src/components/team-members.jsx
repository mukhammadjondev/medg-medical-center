import { styled } from "styled-components"
import { teamMembers } from "../constants/team-members"
import TeamMemberCard from "./team-member-card"

const TeamMembers = () => {
  return (
    <TeamMembersBg>
      <Container className="container">
        <Title className="title">Наша команда</Title>
        <CardWrapper>
          {teamMembers.map(member => (
            <TeamMemberCard member={member} key={member.id} />
          ))}
        </CardWrapper>
      </Container>
    </TeamMembersBg>
  )
}

const TeamMembersBg = styled.section`
  background-color: ${({theme}) => theme.bgSecondary};
`

const Title = styled.h2`
  color: ${({theme}) => theme.textPrimary};
`

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