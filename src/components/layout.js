/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Germania+One" rel="stylesheet');  


  body,html {
    font-family:'Germania One', cursive;
    margin:0 !important;
    padding:0 !important;
  }


`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
