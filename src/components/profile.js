import React, { Component } from 'react'
import Image from "../components/image"
import styled from "styled-components"
import Socials from "../components/socials"
import Layout from "../components/layout"
//import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"


const ProfilePicSection = styled.div `
    
`;

const ProfileInfoSection = styled.div`
    max-width: 50%;
    margin-left: 10%;
    margin-top: 5%;
    margin-right: 10%;

    p {
        font-size: 1vw;
    }
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
    margin-left: 4.5rem;
    margin-top: 2rem;

    .gatsby-image-wrapper {
        border-radius: 25px;
    }
`;

const VerticalLine = styled.div`
    border-left: 2px solid #404040;
    height: 90%;
    margin-left: 4.5rem;
`;




// export default class profile extends Component {
//     render() {

const profile = ({ contacts }) => {
    
        return (
            <ProfileCard>
                <ImageContainer>
                    <h2 style={{paddingLeft: `10px`}}>Hi, I'm Mike.</h2>
                    <Image />
                </ImageContainer>
                
                <VerticalLine />

                <ProfileInfoSection>
                    <h4>Father, Husband and Software Developer</h4>
                    <p>
                        Based out of Chicago. I'm 28 and I'm a guy with many hobbies. I love spending time with my family,
                        fishing, music, sports, gaming and a bunch of other things that I can't think of right now.
                    </p>
                    <p>
                        Feel free to check out my socials below. Sometimes I tweet things, or post cool tech photos on
                        Instagram. Currently, I only have this project displayed on GitHub; and well, LinkedIn is Linked in.
                    </p>
                    <p>                    
                        <Socials contacts={contacts} />                        
                    </p>
                </ProfileInfoSection>

            </ProfileCard>
        )
        }

//     }
// }

export default profile;
