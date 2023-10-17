import { styled } from "styled-components"
import { partners } from "../constants/partners"

const Partners = () => {
  return (
    <section className="container">
      <h2 className="title">Наше партнеры</h2>
      <ImageContainer>
        {partners.map(partner => (
          <img src={partner.img} alt="partner" style={{width: '100%'}} key={partner.id} />
        ))}
      </ImageContainer>
    </section>
  )
}

const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 64px;
`

export default Partners