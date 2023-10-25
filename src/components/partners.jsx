import { styled } from "styled-components"
import { partners } from "../constants/partners"

const Partners = () => {
  return (
    <PartnersCon>
      <div className="container">
        <Title className="title">Наше партнеры</Title>
        <ImageContainer>
          {partners.map(partner => (
            <img src={partner.img} alt="partner" style={{width: '100%'}} key={partner.id} />
          ))}
        </ImageContainer>
      </div>
    </PartnersCon>
  )
}

const PartnersCon = styled.section`
  background-color: ${({theme}) => theme.bgPrimary};
`

const Title = styled.h2`
  color: ${({theme}) => theme.textPrimary};
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-bottom: 64px;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`

export default Partners