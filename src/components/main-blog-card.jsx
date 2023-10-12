import { styled } from "styled-components"

const MainBlogCard = ({blog}) => {
  return (
    <div style={{flex: 1, cursor: 'pointer'}}>
      <Image src={blog.img} />
      <Title>{blog.title}</Title>
      <Subtitle>{blog.subtitle}</Subtitle>
    </div>
  )
}

const Image = styled.img`
  border-radius: 28px;
  margin-bottom: 24px;
`

const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  font-size: 15px;
  color: var(--text-sec);
`

export default MainBlogCard