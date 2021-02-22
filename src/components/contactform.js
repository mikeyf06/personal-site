import React, { Component } from 'react'
import Image from "../components/image"
import styled from "styled-components"
import Socials from "../components/socials"
import Layout from "../components/layout"

const ContactContainer = styled.div`
    justify-content: center;
    margin-top: 25%;
    margin-left: 20%;
`;

const contactform = ({  }) => {
        return (
            <ContactContainer id="contactSection">
                <h1>Contact</h1>
                <p>
                    Form coming soon, BUT, feel free to email at <a href="mailto:michaelflores@hey.com">michaelflores@hey.com</a> until then.
                </p>
            </ContactContainer>
        )
        }



export default contactform;
