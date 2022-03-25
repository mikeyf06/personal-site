import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

// TODO: Adjust the font size for the below sections a little.

const Background = styled.div`
  margin-top: 12rem;
  margin-left: 6rem;
  display: flex;
  flex-direction: row ltr;
  flex-flow: row wrap;
  margin-bottom: 8rem;

  @media screen and (max-width: 600px) {
    margin: 4rem 0 0 0;
  }
`;

const BackgroundDescription = styled.div`
  width: 24rem;
`;

const AccordionWrapper = styled.div`
  width: 22rem;
  min-height: 100%;
  margin: 2rem auto;
  flex-wrap: wrap;
`;

const accordionData = [
  {
    title: 'Languages',
    content: `C#, VB.NET, JavaScript, SQl, TypeScript, + many more`
  },
  {
    title: 'Frameworks',
    content: `.NET (Standard / Core), ASP.NET, MVC, WebForms, Entity Framework, LINQ, React, Gatsby, jQuery.`
  },
  {
    title: 'Technologies',
    content: `Azure, AWS, IIS, TFS / GitHub, CI CD, Unit Testing, Automated Testing, Node.js, APIs (REST, SOAP, GraphQL).`
  },
  {
    title: 'Other Skills',
    content: `Documentation Writing, Team Management, Scope Analysis, Planning, SCRUM / Agile management.`
  }
];

const backgroundinfo = () => (
  <Background id="backgroundSection">
    <BackgroundDescription>
      <h4>My Background</h4>
      <p>
        I have been developing software professionally since 2014. During that time I've primarily been a web developer.
        I've worked at 4 separate companies; 1 corporate company, 2 startups and I'm currently working at for a web agency. At these 4 companies I've developed and
        obtained many different skills and traits as a developer and even a business mind.
      </p>
      <hr />
      <p>
        Besides primarily working as a Web Developer, I've also dabbled in Mobile Development. I've worked in Xamarin
        Forms in a professional setting, and I have also experimented with SwiftUI development in my personal time.
        Mobile Development does interest me quite a bit, I just haven't had many opportunities to develop in it
        professionally.
      </p>
    </BackgroundDescription>
    <AccordionWrapper className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </AccordionWrapper>
  </Background>
);

export default backgroundinfo;
