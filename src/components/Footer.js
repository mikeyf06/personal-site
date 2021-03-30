import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    margin-top: 3rem;
    position: relative;
    font-size: 0.75rem;

`;

export default function Footer() {
    return (
        <FooterContainer>
            © {new Date().getFullYear()}, Built by {` `} <a href="#">Mike Flores</a> with GatsbyJS.
        </FooterContainer>
    )
}
