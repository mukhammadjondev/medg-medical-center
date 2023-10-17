import { styled } from "styled-components"
import { tips } from "../constants/tips"
import { phone1, phone2 } from '../assets'

const Tips = () => {
  return (
    <section>
      <Container className="container">
        <div style={{width: '68%'}}>
          <h2 className="title">Возьмите под контроль свое здоровье</h2>
          <Container>
            <Box>
              {tips.map(item => (
                <div key={item.id}>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                </div>
              ))}
            </Box>
          </Container>
        </div>
        <ImageWrapper>
          <ImageBox1>
            <img src={phone1} alt="phone" />
          </ImageBox1>
          <ImageBox2>
            <img src={phone2} alt="phone" />
          </ImageBox2>
        </ImageWrapper>
      </Container>
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
  top: -55px;
`

const ImageBox1 = styled.div`
  width: 268px;
  position: relative;
  z-index: 10;
`

const ImageBox2 = styled.div`
  position: absolute;
  right: -116px;
  top: 20px;
`

export default Tips