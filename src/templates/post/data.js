const PostTemplateFragment = `
fragment PostTemplateFragment on WPGraphQL_Post {
  id
  postId
  title
  content
  link
  featuredImage {
      node{
        sourceUrl
      }
  }
  categories {
    nodes {
      name
      slug
      id
    }
  }
  tags {
    nodes {
      slug
      name
      id
    }
  }
  author {
    node{
      name
      slug
    }
}
}
`

const BlogPreviewFragment = `
fragment BlogPreviewFragment on WPGraphQL_Post {
  id
  postId
  title
  uri
  date
  slug
  excerpt
  content
  featuredImage {
    node{
        sourceUrl
      }
  }
  author {
      node{
        name
        slug
      }
  }
}
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.BlogPreviewFragment = BlogPreviewFragment
