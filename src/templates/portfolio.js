import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 100%;
  margin: 16px auto;
`

const PortWrapper = styled.div`
  text-align: center;
`

export default ({ pageContext }) => (
  <Layout>
    <PortWrapper>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <strong>Website:</strong>
      <a href={pageContext.acf.portfolio_url} target="_blank">
        {pageContext.acf.portfolio_url}
      </a>
      <FeaturedImage src={pageContext.featured_media.source_url} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <Portfolio />
    </PortWrapper>
  </Layout>
)
