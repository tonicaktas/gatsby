import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import SiteInfo from "./siteinfo"
import styled from "styled-components"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: red;

  max-width: 980px;
  margin: 0 auto;
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Menu 1" } }) {
          edges {
            node {
              name
              items {
                title
                object_slug
                wordpress_children {
                  wordpress_id
                  title
                  url
                  object_slug
                }
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={item.object_slug} key={item.title}>
                {item.title}

                {item.wordpress_children &&
                  item.wordpress_children.map(subitem => (
                    <MenuItem
                      to={subitem.object_slug}
                      key={item.wordpress_children.title}
                    >
                      {subitem.title}
                    </MenuItem>
                  ))}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
