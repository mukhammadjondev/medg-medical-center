import { styled } from "styled-components"

const BlogCard = ({blog}) => {
  return (
    <Container>
      <Image src={blog.img} />
      <div>
        <Title>{blog.title}</Title>
        <Subtitle>{blog.subtitle}</Subtitle>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-left: 20px;
  cursor: pointer;
`

const Image = styled.img`
  border-radius: 16px;
  margin-right: 20px;
`

const Title = styled.h3`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  font-size: 13px;
  color: var(--text-sec);
`

export default BlogCard