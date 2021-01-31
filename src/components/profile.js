import React, { Component } from 'react'
import Image from "../components/image"
import styled from "styled-components"
import Socials from "../components/socials"
import Layout from "../components/layout"

const ProfilePicSection = styled.div `
    
`;

const ProfileInfoSection = styled.div`
    max-width: 50%;
    margin-left: 3.5rem;
    margin-top: 7.5%;
`;

const ProfileCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 450px;
    padding-top: 1.2rem;
    border: 2px solid #404040;
    border-radius: 10px;
`;

const ImageContainer = styled.div`
    max-width: 200px;
    margin-bottom: 1.45rem;
    margin-left: 5.45rem;
    margin-top: 3.8%;

    .gatsby-image-wrapper {
        border-radius: 25px;
    }
`;

const VerticalLine = styled.div`
    border-left: 2px solid #404040;
    height: 90%;
    margin-left: 3.5rem;
`;


export default class profile extends Component {
    render() {
        return (
            <ProfileCard>
                <ImageContainer>
                <h2 style={{paddingLeft: `15px`}}>Hi, I'm Mike.</h2>
                    <Image />
                </ImageContainer>
                
                <VerticalLine />

                <ProfileInfoSection>
                <p>
                I'm baby leggings distillery shoreditch, chia messenger bag flexitarian pabst pok pok gentrify. 
                Literally typewriter forage cliche you probably haven't heard of them seitan irony craft beer williamsburg butcher snackwave twee. 
                Succulents distillery semiotics live-edge. Migas raw denim drinking vinegar, skateboard art party truffaut cronut synth. 
                Literally sartorial poke selvage craft beer shaman heirloom etsy vape copper mug put a bird on it mlkshk thundercats kinfolk. 
                Drinking vinegar shoreditch crucifix synth knausgaard williamsburg food truck meh.

                Dummy text? More like dummy thicc text, amirite? Lolololol
                </p>
                <p>                    
                    <Socials />
                </p>
                </ProfileInfoSection>

            </ProfileCard>
        )
    }
}
