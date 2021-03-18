import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/MF-logo-v1.png"
import styled from "styled-components"
import NavBar from "./navbar.js"

console.log(Logo); 

const HeaderWrapper = styled.div`
  background: #F7F7F7;
  margin-bottom: 10%; 
  height: 100px;
    h1{
      img {
        height: 100px;
        width: 100px;
        margin: 0;
        display: inline;
        float:left;
        margin-left: 25px;
      }
    }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
`;

const Header = ({ siteTitle, contacts }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,
          }}
        >
        <img src={Logo} alt="MF Logo"/>
        </Link>
      </h1>
      <NavBar />
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
