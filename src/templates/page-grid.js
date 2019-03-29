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
      <strong>Acfen grid:</strong>
      <br />
      {pageContext.acf.box_ett}
      <br />
      <FeaturedImage src={pageContext.acf.box_tva.source_url} />

      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <Portfolio />
    </PortWrapper>
  </Layout>
)
