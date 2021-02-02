import React, { Component } from 'react'
import styled from "styled-components"

//  TO DO: Get this importing more efficiently, getting weird errors when I try to
//  import them all at once for some reason.

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"


const SocialsDiv = styled.div`
    display: flex;
    flex-direction: row;
    
    a{
        padding: 2px 10px 2px 2px;
    }
`;

const IconLink = styled.a`
    text-decoration: none;
`;


export default class socials extends Component {
    render() {
        return (
        <SocialsDiv>
            <IconLink href="https://www.linkedin.com/in/michael-flores-b7a69472/" target="_blank">
                <span title="LinkedIn">
                    <FaLinkedin size={26} style={{color: "coolblue"}}/>
                </span>
            </IconLink>
             <IconLink href="https://github.com/mikethedevdad" target="_blank">
                <span title="GitHub">
                    <FaGithub size={26} style={{color: "gray"}}/>
                </span>
            </IconLink>
            <IconLink href="https://twitter.com/mikethedevdad" target="_blank">
                <span title="Twitter">
                    <FaTwitter size={26} style={{color: "skyblue"}}/>
                </span>
            </IconLink>
            <IconLink href="https://www.instagram.com/mikethedevdad/" target="_blank">
                <span title="Instagram">
                    <FaInstagram size={26} style={{color: "fuchsia"}}/>
                </span>
            </IconLink>
        </SocialsDiv>
        )
    }
}


