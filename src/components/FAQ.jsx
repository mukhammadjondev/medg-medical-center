import { useState } from "react";
import { styled } from "styled-components"
import { faq } from "../constants/faq"

const FAQ = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = id => {
    if (clicked === id) {
      return setClicked(null)
    }

    setClicked(id)
  }

  return (
    <section style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container">
        <h2 className="title">FAQ</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {faq.map(item => (
            <Item onClick={() => toggle(item.id)} key={item.id}>
              <ItemBox>
                <Question clicked={clicked === item.id}>{item.question}</Question>
                <IconBox clicked={clicked === item.id}>
                  <img src={item.icon} alt="arrow icon" clicked={clicked === item.id} style={{ fill: 'var(--main)' }} />
                </IconBox>
              </ItemBox>
              {clicked === item.id && <Dropdown dangerouslySetInnerHTML={{ __html: item.answer }}></Dropdown>}
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-white);
  border-radius: 12px;
`

const ItemBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Question = styled.p`
  color: ${props => (props.clicked ? 'var(--main)' : '#000')};
  font-size: 17px;
  font-weight: 500;
  transition: all ease .3s;
`

const IconBox = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: ${props => (props.clicked ? '#fdbfed' : '#F6F4F5')};
  transition: all ease .5s;

  img {
    transform: rotate(${props => (props.clicked ? '-180' : '0')}deg);
    transition: transform ease .5s;
  }
`

const Dropdown = styled.div`
  background: #fff;
  color: #7d7d7d;
  padding-right: 35px;
  margin-top: 10px;

  p {
    font-size: 15px;
  }
`

const Email = styled.p`
  padding-bottom: 119px;
`

const DropdownClicked = styled

export default FAQ