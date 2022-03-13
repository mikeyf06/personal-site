import React, { useState } from 'react';
import styled from "styled-components";

const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 10px;
  padding: 1rem;
  :hover{
    background-color: #e0e0e0;
    }
`;

const AccordionContent = styled.div`
    padding: 1rem;
`;

const AccordionItem = styled.div`
    border: 2px solid #404040;
    border-radius: 10px;
    margin-top:.5rem
`;

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem className="accordion-item">
      <AccordionTitle className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive && <AccordionContent className="accordion-content">{content}</AccordionContent>}
    </AccordionItem>
  );
};

export default Accordion;