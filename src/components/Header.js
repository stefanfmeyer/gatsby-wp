import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"

import { Container, Row, Col } from 'react-bootstrap'


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#263238`,
      marginBottom: `1.45rem`,
      padding: `20px`,
    }}
  >
    <Container>
    <Row>
    
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
      <Col xs={12} sm={6} md={6} lg={6} md={6}>
      <Menu/>
      </Col>
      </Row>
      </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
