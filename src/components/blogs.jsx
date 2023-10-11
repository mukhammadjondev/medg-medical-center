import { styled } from "styled-components"
import { blogs } from "../constants/blogs"
import BlogCard from "./blog-card"
import MainBlogCard from "./main-blog-card"

const Blogs = () => {
  const filteredBlog = blogs.filter(blog => blog.id > 1)
  return (
    <section>
      <div className="container">
        <h2 className="title">Блог о здоровье</h2>
        <BlogsContainer>
          {blogs.map(blog => (
            blog.id === 1 && <MainBlogCard blog={blog} />
          ))}
          <BlogCardWrapper>
            {filteredBlog.map(blog => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </BlogCardWrapper>
        </BlogsContainer>
      </div>
    </section>
  )
}

const BlogsContainer = styled.div`
  display: flex;
  margin-bottom: 64px;
`

const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`

export default Blogs