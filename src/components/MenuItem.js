import React from "react"
import { CreateLocalLink } from "../utils"
import UniversalLink from "./UniversalLink"
import Button from 'react-bootstrap/Button';

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <Button 
    variant="light"  
    size="sm" 
    style={{ margin: "5px"}}>
   <UniversalLink style={{ textAlign: "center" }}
                   to={CreateLocalLink(menuItem, wordPressUrl)}>
      {menuItem.label}
    </UniversalLink>
  </Button>
  )
}

export default MenuItem
