import { styled } from "styled-components"
import BlogCard from "../components/blog-card"
import MainBlogCard from "../components/main-blog-card"
import { blogs } from "../constants/blogs"

const BlogDetailed = () => {
  const filteredBlog = blogs.filter(blog => blog.id > 1)
  return (
    <section style={{borderTop: '1px solid #E8E8E8'}}>
      <div className="container">
        <Routes>Home/Blog-Detailed</Routes>
        {blogs.map(blog => (
          blog.id === 1 && <MainBlogCard blog={blog} key={blog.id} imageHeight='480px' titleSize='31px' content={true} />
        ))}
      </div>
      <div style={{backgroundColor: 'var(--bg-secondary)'}}>
        <div className="container">
          <h2 className="title">Другие статьи</h2>
          <BlogCardWrapper>
            {filteredBlog.map(blog => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </BlogCardWrapper>
        </div>
      </div>
    </section>
  )
}

const Routes = styled.p`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-sec);
  margin-block: 40px 20px;
`

const BlogCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  padding-bottom: 64px;
`
export default BlogDetailed