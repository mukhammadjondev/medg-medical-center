import { styled } from "styled-components"
import logo from '../assets/logo.png'
import ruFlag from '../assets/ru.png'
import chevronDown from '../assets/icons/chevron-down.svg'
import { Link } from "react-router-dom"
import { darkMode, lightMode } from "../assets"
import Modal from "./modal"
import { useState } from "react"

const Navbar = ({toggleMode}) => {
  const [isModal, setIsModal] = useState(false)

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
          <ModeBtn onClick={toggleMode}>
            <img src={localStorage.getItem('mode') === 'light' ? darkMode : lightMode} alt="mode" />
          </ModeBtn>
          <LanguageBtn>
            <img src={ruFlag} alt="Russia flag" style={{marginRight: '8px'}} />
            <small style={{marginRight: '4px'}}>Русский</small>
            <img src={chevronDown} alt="chevron down" />
          </LanguageBtn>
          <ModalBtn onClick={() => setIsModal(true)}>Обратный звонок</ModalBtn>
        </Box>
      </Container>
      {isModal && <Modal setIsModal={setIsModal} />}
    </NavbarBg>
  )
}

const NavbarBg = styled.div`
  background-color: ${({theme}) => theme.darkMode && theme.bgSecondary};
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
  color: ${({theme}) => theme.darkMode ? theme.textPrimary : theme.main};
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ModeBtn = styled.div`
  display: flex;
  align-self: center;
  margin-right: 12px;
  width: 40px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.darkMode ? theme.bgCard : theme.bgSecondary};
  cursor: pointer;
`

const LanguageBtn = styled.div`
  padding: 10px 14px;
  margin-right: 12px;
  border-radius: 14px;
  background-color: ${({theme}) => theme.darkMode ? theme.bgPrimary : theme.bgSecondary};
  color: ${({theme}) => theme.darkMode ? theme.textPrimary : '#273140'};
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ModalBtn = styled.button`
  color: ${({theme}) => theme.darkMode ? theme.textPrimary : theme.main};
  font-weight: bold;
  padding: 14px 18px;
  border-radius: 14px;
  border: none;
  background-color: ${({theme}) => theme.darkMode ? theme.bgPrimary : theme.bgSecondary};
  cursor: pointer;
`

export default Navbar