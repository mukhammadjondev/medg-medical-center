import { styled } from "styled-components"
import { services } from "../constants/services"
import ServiceCard from "./service-card"

const Services = () => {
  return (
    <ServicesBg>
      <div className='container'>
        <Title className="title">Услуги</Title>
        <ServicesWrapper>
          {services.map(card => (
            <ServiceCard card={card} key={card.id} />
          ))}
        </ServicesWrapper>
      </div>
    </ServicesBg>
  )
}

const ServicesBg = styled.section`
  background-color: ${({theme}) => theme.bgSecondary};
`

const Title = styled.h2`
  color: ${({theme}) => theme.textPrimary};
`

const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
`

export default Services