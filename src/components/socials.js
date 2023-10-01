import React from 'react';
import styled from "styled-components";

//  TO DO: Get this importing more efficiently, getting weird errors when I try to
//  import them all at once for some reason.

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const SocialsDiv = styled.div`
    display: flex;
    flex-direction: row;
    
    a{
        padding: 2px 10px 2px 2px;
    }

    @media screen and (max-width: 600px) {
        margin-bottom: .5rem;
    }
`;

const IconLink = styled.a`
    text-decoration: none;
`;


const socials = () => {

        return (
            <SocialsDiv>
                <IconLink href="https://www.instagram.com/mikebytheday/" target="_blank">
                    <span title="Instagram">
                        <FaInstagram size={26} style={{color: "fuchsia"}}/>
                    </span>
                </IconLink>
                <IconLink href="https://github.com/mikethedevdad" target="_blank">
                    <span title="GitHub">
                        <FaGithub size={26} style={{color: "gray"}}/>
                    </span>
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/michael-flores-b7a69472/" target="_blank">
                    <span title="LinkedIn">
                        <FaLinkedin size={26} style={{ color: "coolblue" }}/>
                    </span>
                </IconLink> 
                <IconLink href="https://twitter.com/mikebytheday" target="_blank">
                    <span title="Twitter">
                        <FaTwitter size={26} style={{color: "skyblue"}}/>
                    </span>
                </IconLink>
            </SocialsDiv>
        )};


export default socials;