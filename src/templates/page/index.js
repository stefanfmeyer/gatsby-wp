// src/templates/page/index.js
// Reverted to ef4bba22bf39c11e74e05590855afe3dd398db58

import React  from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"


const Page = ({ pageContext }) => {

  const page = pageContext.page

  return (
    <Layout>
      <SEO title={page.title} />

      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.content}} />

    </Layout>
  )
}

export default Page