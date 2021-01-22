// src/components/Menu.js
/* Here we are using Gatsby's StaticQuery to get all the MenuItems. Also, we are making use of fragments to be able to reuse the query fields later on. */


import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MenuItem from "./MenuItem"

/**
 * Define MenuItem fragment and get all primary menu items.
 * 
 * ORIGINAL QUERY
 * 
/* Here we are using Gatsby's StaticQuery to get all the MenuItems. Also, we are making use of fragments to be able to reuse the query fields later on. */

const MENU_QUERY = graphql`

    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query GETMAINMENU {
        wpgraphql {
            menuItems(where: {location: PRIMARY}) {
                nodes {
                    ...MenuItem
                }
            }
            generalSettings {
                url
            }
        }
    }
`


 // NEW QUERY
 /* This will get 3 levels of menuItems. You will need to add child items to the WordPress menu to see any results. Also, you would need to adjust your component, to support the extra 2 levels in a recursive manner. 
const MENU_QUERY_WITH_CHILDREN = graphql`

  fragment MenuItem on WPGraphQL_MenuItem {
    id
    label
    url
    title
    target
  }

  query GETMAINMENU {
    wpgraphql {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          ...MenuItem
          childItems {
            nodes {
              ...MenuItem
              childItems {
                nodes {
                  ...MenuItem
                }
              }
            }
          }
        }
      }
      generalSettings {
        url
      }
    }
  }
`
*/
const Menu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.wpgraphql.menuItems) {
          const menuItems = data.wpgraphql.menuItems.nodes
          const wordPressUrl = data.wpgraphql.generalSettings.url

          return (
            <div style={{ marginBottom: "20px" }}>
              {
                menuItems &&
                menuItems.map((menuItem) => (
                  <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
                ))
              }
            </div>
          )
        }
        return null
      }}
    />
  )
}

export default Menu