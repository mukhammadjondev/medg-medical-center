import { styled } from "styled-components"
import logo from '../assets/logo.png'
import ruFlag from '../assets/ru.png'
import chevronDown from '../assets/icons/chevron-down.svg'
import { Link } from "react-router-dom"

const Navbar = ({toggleMode}) => {
  return (
    <NavbarBg>
      <Container className="container">
        <Link to={'/'}>
          <Image src={logo} alt='logo' />
        </Link>
        <Box>
          <PhoneNum>
            +998 (97) 123-45-67
            <small style={{color: '#bcbcbc'}}>контактный центр</small>
          </PhoneNum>
          <ModeBtn onClick={toggleMode}>Mode</ModeBtn>
          <LanguageBtn>
            <img src={ruFlag} alt="Russia flag" style={{marginRight: '8px'}} />
            <small style={{color: 'var(--text-black)', fontWeight: 'bold'}}>Русский</small>
            <img src={chevronDown} alt="chevron down" />
          </LanguageBtn>
          <ModalBtn>Обратный звонок</ModalBtn>
        </Box>
      </Container>
    </NavbarBg>
  )
}

const NavbarBg = styled.div`
  background-color: ${({theme}) => theme.bgNavbar ? theme.bgNavbar : '#FFF'};
  border-bottom: 1px solid #E8E8E8;
`

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Box = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 113px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
`

const PhoneNum = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  color: var(--main);
  margin-right: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ModeBtn = styled.button`
  margin-right: 12px;
  padding: 10px 15px;
`

const LanguageBtn = styled.div`
  padding: 10px 14px;
  margin-right: 12px;
  border-radius: 14px;
  background-color: #F8F8F8;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ModalBtn = styled.button`
  color: var(--main);
  font-weight: bold;
  padding: 14px 18px;
  border-radius: 14px;
  border: none;
  background-color: var(--bg-hero);
  cursor: pointer;
`

export default Navbar