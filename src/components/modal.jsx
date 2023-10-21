import { styled } from "styled-components"
import { close } from "../assets"

const Modal = () => {
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
            <Label htmlFor="number">Телефон</Label>
            <Input type="number" id="number" value='+998' placeholder="(00) 000-00-00" />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &::placeholder {
    color: #D9D5D5;
    font-size: 15px;
  }
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