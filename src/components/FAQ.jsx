import { styled } from "styled-components"
import { faq } from "../constants/faq"

const FAQ = () => {
  return (
    <section style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container">
        <h2 className="title">FAQ</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {faq.map(item => (
            <Item>
              <Question>{item.question}</Question>
              <IconBox>
                <img src={item.icon} alt="arrow icon" />
              </IconBox>
            </Item>
          ))}
        </div>
        <Email></Email>
      </div>
    </section>
  )
}

const Item = styled.div`
  width: 100%;
  padding: 18px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-white);
  border-radius: 12px;
`

const Question = styled.p`
  color: #000;
  font-size: 17px;
  font-weight: 500;
`

const IconBox = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #F6F4F5;
`

const Email = styled.p`
  padding-bottom: 119px;
`

export default FAQ