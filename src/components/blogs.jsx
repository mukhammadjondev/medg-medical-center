import { styled } from "styled-components"
import { blogs } from "../constants/blogs"
import BlogCard from "./blog-card"
import MainBlogCard from "./main-blog-card"

const Blogs = () => {
  const filteredBlog = blogs.filter(blog => blog.id > 1)
  return (
    <BlogsBg>
      <div className="container">
        <Title className="title">Блог о здоровье</Title>
        <BlogsContainer>
          {blogs.map(blog => (
            blog.id === 1 && <MainBlogCard blog={blog} key={blog.id} />
          ))}
          <BlogCardWrapper>
            {filteredBlog.map(blog => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </BlogCardWrapper>
        </BlogsContainer>
      </div>
    </BlogsBg>
  )
}

const BlogsBg = styled.section`
  background-color: ${({theme}) => theme.bgPrimary};
`

const Title = styled.h2`
  color: ${({theme}) => theme.textPrimary};
`

const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  padding-bottom: 64px;
`

const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default Blogs