import { useState } from "react";
import { styled } from "styled-components"
import { close } from "../assets"

const Modal = ({setIsModal, signUp}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleInput = e => {
    const formatedPhoneNum = formatPhoneNum(e.target.value)
    setPhoneNumber(formatedPhoneNum)
  }

  return (
    <ModalBg>
      <Container>
        <HeaderCon>
          <Title>{signUp ? signUp : 'Обратный звонок'}</Title>
          <img src={close} alt="close" onClick={() => setIsModal(false)} style={{cursor: 'pointer'}} />
        </HeaderCon>
        <Form>
          <BoxInput>
            <Label htmlFor="name">ФИО</Label>
            <Input type="text" id="name" placeholder="Укажите ФИО" required />
          </BoxInput>
          <BoxInput style={{position: 'relative', marginBottom: `${signUp ? '' : '30px'}`}}>
            <Label htmlFor="phone">Телефон</Label>
            <Input type="text" id="phone"  placeholder='(90) 123-45-67' value={phoneNumber} onChange={e => handleInput(e)} style={{paddingLeft: '58px'}} required />
            <CountCode>+998</CountCode>
          </BoxInput>
          {signUp && <Box>
            <BoxInput>
              <Label htmlFor="date">Дата</Label>
              <Input type="date" id="date" placeholder="Выберите дату" required />
            </BoxInput>
            <BoxInput>
              <Label htmlFor="time">Время</Label>
              <Input type="text" id="time" placeholder="Выберите время" required />
            </BoxInput>
          </Box>}
          <Button>Необходимо заполнить поля</Button>
        </Form>
      </Container>
    </ModalBg>
  )
}

function formatPhoneNum(value) {
  const phoneNum = value.replace(/[^\d]/g, '')

  if (phoneNum.length <= 2) {
    return phoneNum
  } else if (phoneNum.length <= 5) {
    return `(${phoneNum.slice(0, 2)}) ${phoneNum.slice(2)}`
  } else if (phoneNum.length <= 7) {
    return `(${phoneNum.slice(0, 2)}) ${phoneNum.slice(2, 5)}-${phoneNum.slice(5, 7)}`
  } else {
    return `(${phoneNum.slice(0, 2)}) ${phoneNum.slice(2, 5)}-${phoneNum.slice(5, 7)}-${phoneNum.slice(7, 9)}`
  }
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
  padding: 14px 16px;
  border: none;
  border-radius: 14px;
  background-color: ${({theme}) => theme.bgPrimary};
  font-size: 15px;
  color: ${({theme}) => theme.textPrimary};

  &::placeholder {
    color: #D9D5D5;
    font-size: 15px;
  }
`

const CountCode = styled.span`
  position: absolute;
  top: 38px;
  left: 16px;
  font-size: 15px;
  color: ${({theme}) => theme.darkMode ? theme.textPrimary : '#273140'};
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