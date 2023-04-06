// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blog} = props

  const {title, description, publishedDate} = blog

  return (
    <div className="blogContainer">
      <div className="blog">
        <h1 className="blogTitle">{title}</h1>
        <p className="blogDate">{publishedDate}</p>
      </div>
      <p className="blogDescription">{description}</p>
    </div>
  )
}

export default BlogItem
