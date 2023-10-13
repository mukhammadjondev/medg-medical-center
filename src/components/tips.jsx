import { styled } from "styled-components"
import { tips } from "../constants/tips"
import { phone1, phone2 } from '../assets'

const Tips = () => {
  return (
    <section>
      <div className="container">
        <h2 className="title">Возьмите под контроль свое здоровье</h2>
        <Container>
          <Box>
            {tips.map(item => (
              <div>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </div>
            ))}
          </Box>
          <ImageWrapper>
            <img src={phone1} alt="phone" />
            <img src={phone2} alt="phone" />
          </ImageWrapper>
        </Container>
      </div>
    </section>
  )
}

const Container = styled.div`
  display: flex;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
`

const Description = styled.p`
  font-size: 15px;
  color: var(--text-sec);
  margin-bottom: 16px;
`

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  top: -220px;
`

export default Tips