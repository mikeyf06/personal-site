import React, { Component } from 'react';
import Image from "./image";
import styled from "styled-components";
import Socials from "./socials";
import Layout from "./layout";


//TODO: Adjust the font size for the below sections a little.

const Background = styled.div`
    margin-top: 10%;
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
`;

const BackgroundDescription = styled.div`
    margin-top: 25%;
    width: 50%;
`;

const BackgroundInfo = styled.div`
    max-height: 100%;
    margin-bottom: 10%;
    position: relative;
`;

const Grid2x2 = styled.div`
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 10%;
    margin-left: 10%;
`;

const Info1 = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 2px solid rgba(64, 64, 64, .5);
    border-bottom: 2px solid #404040;

    #languagesSection{
        margin-left: 5%;
    }
`;

const Info2 = styled.div`
    border-left: 2px solid #404040;
    border-bottom: 2px solid #404040;

    #frameworkSection {
        margin-top: 3%;
        margin-left: 5%;
    }
`;

const Info3 = styled.div`
    border-right: 2px solid #404040;
    border-top: 2px solid #404040;
    
    #otherSkillsSection {
        margin-top: 3%;
        margin-left: 5%;
    }
`;

const Info4 = styled.div`
    border-left: 2px solid #404040;
    border-top: 2px solid #404040;

    #technologiesSection{
        margin-left: 3%;
        margin-top: 5%;
    }
`;


const backgroundinfo = ({  }) => {
        return (
            <Background id="backgroundSection">
            <BackgroundDescription>
                <h4>My Background</h4>
                <p>
                    I have been developing software professionally since 2014. During that time I've primarily been a
                    web developer. I've worked at 3 separate companies, 1 corporate company and 2 startups. At these 3 companies
                    I've developed and obtained many different skills and traits as a developer and even a business mind.
                </p>
            </BackgroundDescription>
                <BackgroundInfo>
                    <Grid2x2>
                        <Info1>
                            <div id="languagesSection">
                                    <h5>Languages</h5>
                                    <ul>
                                        <li> C# </li>
                                        <li> JavaScript</li>
                                        <li> SQL </li>
                                    </ul>
                            </div>
                        </Info1>
                        <Info2>
                            <div id="frameworkSection">
                            <h5>Frameworks</h5>
                                    <ul>
                                        <li> .NET (Standard / Core) </li>
                                        <li> ASP.NET </li>
                                        <li> MVC </li>
                                        <li> Entity Framework </li>
                                        <li> React </li>
                                        <li> Gatsby </li>
                                        <li> jQuery </li>
                                    </ul>
                            </div>
                        </Info2>
                        <Info3>
                            <div id="otherSkillsSection">
                            <h5> Other Skills </h5>
                                    <ul>
                                        <li> Documentation Writing </li>
                                        <li> Unit Testing </li>
                                        <li> SCRUM / Agile </li>
                                    </ul>
                            </div>
                        </Info3>
                        <Info4 >
                            <div id="technologiesSection">
                                <h5>Technologies</h5>
                                    <ul>
                                        <li> Azure Management </li>
                                        <li> IIS </li>
                                        <li> LINQ </li>
                                        <li> TFS / GitHub </li>
                                        <li> CI/CD </li>
                                        <li> API familiarity: REST / SOAP / GraphQL </li>
                                    </ul>
                            </div>
                        </Info4>
                        {/* Add some more stuff here maybe */}
                    </Grid2x2>
                </BackgroundInfo>
            </Background>
        )
        }

export default backgroundinfo;
