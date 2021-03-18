import React, { Component } from 'react'
//GLink refers to Gatsby-Link
import { Link as GLink } from "gatsby"
import styled from "styled-components"

const NavWrapper = styled.div`
    #nav {
        margin:0;
        padding:0;
    }
    #nav li {
        display:inline;
        padding:0;
        margin:0;
        padding:0 20px 20px 20px;
        border-bottom: 2px solid #404040
    }
    #navWrapper{
        display:inline;
        padding:0;
        margin:0;
        padding:35px 20px 4px 10px;
        float:right; 
    }
`;

const StyledLink = styled(GLink)`
    color: #404040;
    text-decoration: none;
    

    :hover{
        text-decoration: underline;
        text-underline-offset: 7px;
    }
`;

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper>
                <div id="navWrapper">
                    <ul id="nav">
                        <li>
                            <StyledLink to="/">Home</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="#backgroundSection">Background</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="#contactSection">Contact</StyledLink>
                        </li>
                    </ul>
                </div>
            </NavWrapper>
        )
    }
}
