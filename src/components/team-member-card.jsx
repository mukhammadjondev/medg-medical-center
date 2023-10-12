import { styled } from "styled-components"

const TeamMemberCard = ({member}) => {
  return (
    <Card>
      <div style={{overflow: 'hidden', borderRadius: '20px 20px 0 0'}}>
        <Image src={member.image} alt='member image' />
      </div>
      <Name>{member.name}</Name>
      <Position>{member.position}</Position>
    </Card>
  )
}

const Card = styled.div`
  width: 24%;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px;
    background-color: #f8faff;
  }
  &:hover img {
    transform: scale(1.1);
    transition: all 0.4s;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  vertical-align: middle;
`

const Name = styled.h3`
  width: 80%;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
`

const Position = styled.p`
  width: 80%;
  font-size: 13px;
  color: var(--text-sec);
  text-align: center;
  margin-bottom: 20px;
`

export default TeamMemberCard