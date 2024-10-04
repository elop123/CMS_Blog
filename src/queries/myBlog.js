export const myBlog = `query MyQuery {

  blog {
    id_num
    author
    title
    image {
      url
    }
    description {
      html
    }
    releasedDate
  }
}`