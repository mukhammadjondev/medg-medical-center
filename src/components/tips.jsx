import { styled } from "styled-components"
import { tips } from "../constants/tips"
import { phone1, phone2 } from '../assets'

const Tips = () => {
  return (
    <TipsBg>
      <Container className="container">
        <div style={{width: '68%'}}>
          <TitleMain className="title">Возьмите под контроль свое здоровье</TitleMain>
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
  display: flex;
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