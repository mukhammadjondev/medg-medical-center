import { styled } from "styled-components"
import heroImg from '../assets/images/hero-img.png'

const Hero = () => {
  return (
    <HeroMain>
      <ContainerHero className='container'>
        <Box>
          <Title>Консультация врача в любое время и в любом месте по звонку</Title>
          <Subtitle>Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога и других высококласных врачей</Subtitle>
          <Button>Записаться онлайн</Button>
        </Box>
        <ImageWrapper>
          <HeroImage src={heroImg} alt='hero image' />
        </ImageWrapper>
      </ContainerHero>
    </HeroMain>
  )
}

const HeroMain = styled.main`
  background-color: var(--bg-primary);
  width: 100%;
`

const ContainerHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  postion:relative;
`

const Box = styled.div`
  max-width: 645px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const Subtitle = styled.p`
  color: var(--text-sec);
  margin-bottom: 1.5rem;
`

const Button = styled.button`
  background-color: var(--main);
  color: #FFF;
  padding: 14px 18px;
  border: none;
  border-radius: 14px;
`

const ImageWrapper = styled.div`
  display: flex;
  // &:after {
  //   content: '';
  //   display: inline-block;
  //   position: absolute;
  //   width: 574px;
  //   height: 535px;
  //   border-radius: 50%;
  //   background: #FFF;
  //   filter: blur(40px);
  // }
`

const HeroImage = styled.img`
  z-index: 100;
  margin-top: 64px;
`

export default Hero