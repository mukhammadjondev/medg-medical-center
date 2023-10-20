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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 64px;
`

export default Partners