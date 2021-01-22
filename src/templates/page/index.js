<<<<<<< HEAD
// src/templates/page/index.js
// Reverted to ef4bba22bf39c11e74e05590855afe3dd398db58

import React  from "react"
=======
import React from "react"
>>>>>>> d5a56cbba82f6b82ebfa7a1c2ffcf5b7a86782b2

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"


const Page = ({ pageContext }) => {
  const {
    page: { title, content },
  } = pageContext;

  return (
    <Layout>
      <SEO title={title} />

      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Page
