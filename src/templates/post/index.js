// src/templates/post/index.js
// Reverted to ef4bba22bf39c11e74e05590855afe3dd398db58

import React  from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"


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