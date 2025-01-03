import React from 'react';
import Image from "./image";
import styled from "styled-components";
import Socials from "./socials";
import YearsFromDate from "../components/YearsFromDate";



const ProfileCard = styled.div`
    display: flex;
    flex-direction: row ltr;
    flex-flow: row wrap;
    margin-left: 8.5rem; 
    @media screen and (max-width: 600px) {
        padding: 0 6rem 0 0;        
        width: 25rem;     
        margin: 4rem 0 0 0;   
    }
`;

const ImageContainer = styled.div`
    order: 1;
    width: 10rem;
    margin-bottom: 1.45rem;
    //margin-left: 2rem;
    margin-top: 2rem;

    @media screen and (max-width: 600px) {
        margin: 0 0 0 2rem; 
        width: 100%;
    }

    .gatsby-image-wrapper {
        height: 12rem;        
        width: 12rem;        
        border-radius: 50rem;
    }

    h3 {
        margin-left:2rem;
    }

    h6 {
        margin-left: 1.5rem;
    }
`;

const ProfileInfoSection = styled.div`
    order: 2;
    width: 25rem;
    margin: 2rem auto;
    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
        margin: 2rem 0 0 0;
        width: 100%;
    }
`;
const profile = ({ contacts  }) => {
    const birthDate = '1992-05-04';
    const careerStartDates = '2014-08-01';

    return (
        <ProfileCard id="profileSection">
            <ImageContainer>
                <h3>Mike Flores</h3>
                <h6>Web Developer</h6>
                <Image />
            </ImageContainer>
            
            <ProfileInfoSection>
                <h4>Father, Husband and Software Developer</h4>
                <p>
                    Based out of Chicago, developing various kinds of software for over <YearsFromDate givenDate={careerStartDates}>s</YearsFromDate>. 
                </p>
                <p>
                    I'm <YearsFromDate givenDate={birthDate} /> old and I'm a guy with many hobbies. I love spending time with my family, golfing,
                    playing music, playing/watching sports, photography, gaming and a bunch of other things that I can't think of right now.
                </p>
                <p>
                    Feel free to check out my socials below. Sometimes I tweet things, or post cool photos on
                    Instagram.
                </p>
                                    
                <Socials contacts={contacts} />                        
            </ProfileInfoSection>
        </ProfileCard>
    )};



export default profile;
