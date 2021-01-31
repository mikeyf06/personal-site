import React, { Component } from 'react'
import styled from "styled-components"
import FaLinkedIn from "react-icons/all-files/fa/FaLinkedIn"

const Socials = styled.div`
    display: flex;
    flex-direction: row;
`;


export default class socials extends Component {
    render() {
        return (
        <Socials>
            <a href="google.com" target="_blank">
                <span title="LinkedIn">
                    <FaLinkedIn size={22} style = {{ color: "secondary"}} />
                </span>
            </a>
        </Socials>
        )
    }
}
