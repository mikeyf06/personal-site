import React, { Component } from 'react'
import Image from "../components/image"
import styled from "styled-components"


const ProfilePicSection = styled.div `


`;

const ProfileInfoSection = styled.div`


`;

const ProfileCard = styled.div`

`;


export default class profile extends Component {
    render() {
        return (
            <div>
                <h1>Hi, I'm Mike.</h1>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <Image />
                </div>
            </div>
        )
    }
}
