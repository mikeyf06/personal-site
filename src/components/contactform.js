import React from 'react';
import styled from "styled-components";

const ContactContainer = styled.form`
    margin-left: 2rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 12rem;
    @media screen and (max-width: 600px) {
        //margin-left: 0;
        margin: 2rem 0 0 0;
    }
`;

const ContactDescription = styled.div`
  margin-left: 25%;
  @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`;

const ContactFields = styled.div`
    margin-left: 40%;
    
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`;

const contactform = () => {
    return (
      <>
        <ContactContainer id="contactSection" name="Personal Site Form" method="POST" data-netlify="true" action="/ThankYou">
        <ContactDescription>
          <h3>Contact Me!</h3>
          <p>Looking for some work to be done? Wanna chat? Tell me below!</p>
        </ContactDescription>
        <ContactFields>
          <input type="hidden" name="form-name" value="Personal Site Form" />
              <p>
                <label>Your Name: </label>  <br/> <input type="text" name="name" required />
              </p>
              <p>
                <label>Your Email: </label><br /><input type="email" name="email" required />
              </p>
              <p>
                <label>Message: </label><br /><textarea name="message" required></textarea>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
          </ContactFields>
        </ContactContainer>
        </>
    )
};

export default contactform;
