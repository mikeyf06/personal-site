import React, { Component } from 'react';
import styled from "styled-components";

const ContactContainer = styled.div`
    justify-content: center;
    /* margin-top: 4%; */
    margin-left: 30%;
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
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
