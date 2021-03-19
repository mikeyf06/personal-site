import React, { Component } from 'react';
import Image from "./image";
import styled from "styled-components";
import Socials from "./socials";
import Layout from "./layout";

const ContactContainer = styled.div`
    justify-content: center;
    /* margin-top: 4%; */
    margin-left: 3rem;
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
};



export default contactform;
