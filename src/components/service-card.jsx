import { styled } from "styled-components"

const ServiceCard = ({card}) => {
  return (
    <Card>
      <CardTitle>{card.title}</CardTitle>
      <CardSubtitle>{card.subtitle}</CardSubtitle>
      <Image src={card.icon} alt='card image' />
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 32%;
  height: 244px;
  background-color: ${({theme}) => theme.darkMode ? theme.bgCard : '#fff'};
  border-radius: 12px;
  cursor: pointer;
  transition: all ease .5s;
  &:hover{
    transform: scale3d(1.05,1.05,1.05);
  }
`

const CardTitle = styled.h3`
  margin: 50px 25px 12px;
  color: ${({theme}) => theme.textPrimary};
`

const CardSubtitle = styled.p`
  margin: 0 25px 30px;
  color: ${({theme}) => theme.textSecondary};
`

const Image = styled.img`
  position: absolute;
  top: -32px;
  right: 16px;
`

export default ServiceCard