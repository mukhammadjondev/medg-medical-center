import { Link } from "react-router-dom"
import { styled } from "styled-components"

const MainBlogCard = ({blog, imageHeight = 'auto', titleSize, content}) => {
  return (
    <Link to={`/blog-detailed`} style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
      <Image src={blog.img} height={imageHeight} />
      <Title $titleSize={titleSize}>{blog.title}</Title>
      {content ? (
        <Content dangerouslySetInnerHTML={{ __html: blog.content }} />
      ) : (
        <Subtitle>{blog.subtitle}</Subtitle>
      )}
    </Link>
  )
}

const Image = styled.img`
  width: 100%;
  border-radius: 28px;
  margin-bottom: 24px;
  object-position: 0% 0%;
`

const Title = styled.h3`
  font-size: ${({ $titleSize }) => ($titleSize ? '31px' : '25px')};
  font-weight: 600;
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  font-size: 15px;
  color: var(--text-sec);
`

const Content = styled.div`
  font-size: 17px;
  color: #402C36;
  margin-bottom: 64px;
`

export default MainBlogCard