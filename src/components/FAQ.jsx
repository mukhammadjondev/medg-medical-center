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
              <Arrow clicked={clicked === item.id} />
              <ItemBox>
                <Question clicked={clicked === item.id}>{item.question}</Question>
                <IconBox clicked={clicked === item.id}>
                  <img src={item.icon} alt="arrow icon" />
                </IconBox>
              </ItemBox>
              <Dropdown isOpen={clicked} clicked={clicked === item.id} dangerouslySetInnerHTML={{ __html: item.answer }}></Dropdown>
            </Item>
          ))}
        </div>
        <Email>Не смогли найти то, что искали? Напишите нам на <span>medghelp@gmail.com</span></Email>
      </div>
    </section>
  )
}

const Item = styled.div`
  position: relative;
  width: 100%;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-white);
  border-radius: 12px;
  overflow: hidden;
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

    svg {
      color: var(--main);
    }
  }
`

const Dropdown = styled.div`
  background-color: #fff;
  color: #7d7d7d;
  padding-right: 35px;
  margin-top: ${props => (props.clicked ? '10px' : '0')};
  overflow: hidden;
  max-height: ${props => (props.clicked ? 'auto' : '0')};
  opacity: ${props => (props.clicked ? '1' : '0')};
  transition: max-height 2.5s ease, opacity 1s ease;

  p {
    font-size: 15px;
  }
`

const Email = styled.p`
  margin-top: 10px;
  padding-bottom: 119px;
  color: var(--text-sec);
  text-align: end;

  span {
    color: #5F8BED;
    cursor: pointer;
  }
`

const Arrow = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--main);
  border-radius: 2px;
  position: absolute;
  transform: rotate(45deg);
  left: ${props => (props.clicked ? '-5px' : '-12px')};
  top: 28px;
  transition: left 0.3s ease;
`

export default FAQ