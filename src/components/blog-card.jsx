import { Link } from "react-router-dom"
import { styled } from "styled-components"

const BlogCard = ({blog}) => {
  return (
    <Link to={`/blog-detailed/${blog.id}`} style={{textDecoration: 'none'}}>
      <Container>
        <Image src={blog.img} />
        <div>
          <Title>{blog.title}</Title>
          <Subtitle>{blog.subtitle}</Subtitle>
        </div>
      </Container>
    </Link>
  )
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
`

const Image = styled.img`
  max-width: 183px;
  width: 100;
  border-radius: 16px;
  margin-right: 20px;
`

const Title = styled.h3`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({theme}) => theme.textPrimary};
`

const Subtitle = styled.p`
  font-size: 13px;
  color: ${({theme}) => theme.textSecondary};
`

export default BlogCard