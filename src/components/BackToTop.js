import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopLink = styled.a`
    border-radius: 25px;
    position: fixed;
    height: 45px;
    bottom: 5%;
    right: 3%;
    background: var(--pink);
    color: white;
    background: #535851;
    cursor: pointer;
    padding: 0.5rem 1rem 1rem 1rem;
    transition: opacity 0.2s;
    opacity: 0;
    text-decoration: none;
    ${props =>
        props.percent > 0.25 &&
        `
        opacity: 1;
    `}    
    @media screen and (max-width: 500px) {
        bottom: 1%;
        right: 1%;
    }
`;

function useScrollPosition() {
  const [percent, setPercent] = useState(0);

  function handleScroll(event) {
    const scrollTop =
      document.scrollingElement.scrollHeight -
      document.documentElement.clientHeight;
    const howFar = document.documentElement.scrollTop / scrollTop;
    setPercent(howFar);
  }

  useEffect(() => {
    // listen for window scroll event
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return percent;
}

export default function BackToTop() {
  const percent = useScrollPosition();
  return (
    <BackToTopLink href="#top" title="Back To Top" percent={percent}>
      &uarr;
    </BackToTopLink>
  );
}