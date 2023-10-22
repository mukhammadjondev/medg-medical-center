import { useState } from "react";
import { styled } from "styled-components"
import { close } from "../assets"

const Modal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleInput = e => {
    const formattedPhoneNum = formatPhoneNum(e.target.value)
    setPhoneNumber(formattedPhoneNum)
  }

  function formatPhoneNum(value) {
    if(!value) return value
    const phoneNum = value.replace(/[^\d]/g, '')
    const phoneNumLength = phoneNum.length
    if(phoneNumLength < 4) return phoneNum
    if(phoneNumLength < 7) {
      return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`
    }
    return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(6, 10)}`
  }

  return (
    <ModalBg>
      <Container>
        <HeaderCon>
          <Title>Записаться онлайн</Title>
          <img src={close} alt="close" />
        </HeaderCon>
        <Form>
          <BoxInput>
            <Label htmlFor="name">ФИО</Label>
            <Input type="text" id="name" placeholder="Укажите ФИО" />
          </BoxInput>
          <BoxInput>
            <Label htmlFor="phone">Телефон</Label>
            <Input type="text" id="phone"  placeholder='(90) 123-45-67' value={phoneNumber} onChange={e => handleInput(e)} />
            <CountCode>+998</CountCode>
          </BoxInput>
          <Box>
            <BoxInput>
              <Label htmlFor="date">Дата</Label>
              <Input type="date" id="date" placeholder="Выберите дату" />
            </BoxInput>
            <BoxInput>
              <Label htmlFor="time">Время</Label>
              <Input type="number" id="time" placeholder="Выберите время" />
            </BoxInput>
          </Box>
          <Button>Необходимо заполнить поля</Button>
        </Form>
      </Container>
    </ModalBg>
  )
}

const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(51, 44, 48, .5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 496px;
  height: 452px;
  background-color: ${({theme}) => theme.bgSecondary};
  border-radius: 24px;
`

const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
`

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  background-color: ${({theme}) => theme.bgPrimary};
  border-radius: 24px 24px 0 0;
`

const Title = styled.h3`
  font-size: 23px;
  color: ${({theme}) => theme.textPrimary};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 28px;
  gap: 12px;
`

const Label = styled.label`
  font-size: 13px;
  color: ${({theme}) => theme.textSecondary};
  margin-bottom: 8px;
`

const Input = styled.input`
  position: relative;
  padding: 14px 16px;
  border: none;
  border-radius: 14px;
  background-color: ${({theme}) => theme.bgPrimary};

  &::placeholder {
    color: #D9D5D5;
    font-size: 15px;
  }
`

const CountCode = styled.span`
  position: absolute;
  top: 14px;
  left: 16px;
`

const Button = styled.button`
  padding: 18px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 14px;
  background-color: ${({theme}) => theme.bgPrimary};
  font-size: 15px;
  color: ${({theme}) => theme.textPrimary};
  letter-spacing: -0.3px;
`

export default Modal