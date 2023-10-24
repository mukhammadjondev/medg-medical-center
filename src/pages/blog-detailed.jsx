import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import BlogCard from "../components/blog-card"
import MainBlogCard from "../components/main-blog-card"
import { blogs } from "../constants/blogs"

const BlogDetailed = () => {
  const {id} = useParams()
  const filteredBlog = blogs.filter(blog => blog.id != id)

  return (
    <DetailedBg>
      <div className="container">
        <Routes>Home/Blog-Detailed</Routes>
        {blogs.map(blog => (
          blog.id == id && <MainBlogCard blog={blog} key={blog.id} imageHeight='480px' titleSize='31px' content={true} />
        ))}
      </div>
      <CardWrapperBg>
        <div className="container">
          <Title className="title">Другие статьи</Title>
          <BlogCardWrapper>
            {filteredBlog.map(blog => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </BlogCardWrapper>
        </div>
      </CardWrapperBg>
    </DetailedBg>
  )
}

const DetailedBg = styled.section`
  background-color: ${({theme}) => theme.bgPrimary};
`

const Routes = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme}) => theme.textSecondary};
  text-transform: uppercase;
  padding-block: 40px 20px;
`

const Title = styled.h2`
  color: ${({theme}) => theme.textPrimary};
`

const CardWrapperBg = styled.div`
  background-color: ${({theme}) => theme.bgSecondary};
`

const BlogCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  padding-bottom: 64px;
`
export default BlogDetailed