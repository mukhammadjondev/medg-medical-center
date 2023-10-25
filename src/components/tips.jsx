import { styled } from "styled-components"
import { tips } from "../constants/tips"
import { phone1, phone2 } from '../assets'

const Tips = () => {
  return (
    <TipsBg>
      <Container className="container">
        <div>
          <TitleMain className="title">Возьмите под контроль свое здоровье</TitleMain>
          <Box>
            {tips.map(item => (
              <div key={item.id}>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </div>
            ))}
          </Box>
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
    </TipsBg>
  )
}

const TipsBg = styled.section`
  background-color: ${({theme}) => theme.darkMode ? '#252424' : theme.bgPrimary};
`

const TitleMain = styled.h2`
  color: ${({theme}) => theme.textPrimary};
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({theme}) => theme.textPrimary};
`

const Description = styled.p`
  font-size: 15px;
  color: ${({theme}) => theme.textSecondary};
  margin-bottom: 16px;
`

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  top: -55px;
`

const ImageBox1 = styled.div`
  max-width: 268px;
  width: 100%;
  position: relative;
  z-index: 10;
`

const ImageBox2 = styled.div`
  max-width: 247px;
  width: 100%;
  position: absolute;
  right: -35px;
  top: 20px;
`

export default Tips