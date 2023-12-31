import { useState } from "react"
import { styled } from "styled-components"
import heroImg from '../assets/images/hero-img.png'
import Modal from "./modal"

const Hero = () => {
  const [isModal, setIsModal] = useState(false)

  return (
    <HeroMain>
      <ContainerHero className='container'>
        <Box>
          <Title>Консультация врача в любое время и в любом месте по звонку</Title>
          <Subtitle>Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога и других высококласных врачей</Subtitle>
          <Button onClick={() => setIsModal(true)}>Записаться онлайн</Button>
        </Box>
        <BlurFon />
        <ImageWrapper>
          <HeroImage src={heroImg} alt='hero image' />
        </ImageWrapper>
      </ContainerHero>
      {isModal && <Modal setIsModal={setIsModal} signUp={'Записаться онлайн'} />}
    </HeroMain>
  )
}

const HeroMain = styled.main`
  background-color: ${({theme}) => theme.darkMode ? theme.bgPrimary : theme.bgHero};
  width: 100%;
`

const ContainerHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:relative;
`

const Box = styled.div`
  max-width: 645px;
  width: 100%;
`

const Title = styled.h1`
  color: ${({theme}) => theme.textPrimary};
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const Subtitle = styled.p`
  color: ${({theme}) => theme.textSecondary};
  margin-bottom: 1.5rem;
`

const Button = styled.button`
  background-color: ${({theme}) => theme.main};
  color: #FFF;
  padding: 14px 18px;
  border: 1px solid transparent;
  border-radius: 14px;

  &:hover {
    background-color: ${({theme}) => theme.darkMode ? theme.bgSecondary : '#fff'};
    color: ${({theme}) => theme.main};
    border: 1px solid ${({theme}) => theme.main};
    cursor: pointer;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  z-index: 10;
`

const HeroImage = styled.img`
  margin-top: 64px;
`

const BlurFon = styled.div`
  display: flex;
  position: absolute;
  max-width: 45%;
  max-height: 90%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme}) => theme.blurFon ? theme.blurFon : '#FFF'};
  filter: blur(40px);
  right: 0px;
  top: 70px;
`

export default Hero