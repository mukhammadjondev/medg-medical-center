import { styled } from "styled-components"
import { instagram, telegram, twitter, whiteLogo } from "../assets"

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#211B1E'}}>
      <Container className='container'>
        <Wrapper>
          <img src={whiteLogo} alt="logo" />
          <Box>
            <Contact>
              +998 (97) 123-45-67
              <small style={{color: '#bcbcbc'}}>контактный центр</small>
            </Contact>
            <Contact>
              medg@gmail.com
              <small style={{color: '#bcbcbc'}}>контактный центр</small>
            </Contact>
          </Box>
        </Wrapper>
        <hr style={{backgroundColor: '#bcbcbc', marginBlock: '24px'}} />
        <Wrapper>
          <Text>© Все права защищены 2023. Частный медицинский центр MedG</Text>
          <div style={{display: 'flex', gap: '24px'}}>
            <img src={instagram} alt="instagram" />
            <img src={telegram} alt="telegram" />
            <img src={twitter} alt="twitter" />
          </div>
        </Wrapper>
      </Container>
    </footer>
  )
}

const Container = styled.div`
  padding-block: 32px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Box = styled.div`
  display: flex;
`

const Contact = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-right: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Text = styled.p`
  font-size: 15px;
  color: var(--text-sec)
`

export default Footer