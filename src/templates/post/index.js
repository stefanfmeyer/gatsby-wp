// src/templates/post/index.js

import React  from "react"

import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"


const Post = ({ pageContext }) => {

  const post = pageContext.post

  return (
    <Layout>
      <SEO title={post.title} />

      <h1> {post.title} </h1>
      <div dangerouslySetInnerHTML={{__html: post.content}} />

    </Layout>
  )
}

export default Post