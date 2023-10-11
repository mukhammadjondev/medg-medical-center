import { styled } from "styled-components"
import { services } from "../constants/services"
import ServiceCard from "./service-card"

const Services = () => {
  return (
    <section style={{backgroundColor: 'var(--text-sec)'}}>
      <div className='container'>
        <h2 className="title">Услуги</h2>
        <ServicesWrapper>
          {services.map(card => (
            <ServiceCard card={card} key={card.id} />
          ))}
        </ServicesWrapper>
      </div>
    </section>
  )
}

const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
`

export default Services