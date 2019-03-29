import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"

export default ({ pageContext }) => (
  <Layout>
    <h2 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />

    <Portfolio />
  </Layout>
)
