import React from 'react';
import styled from "styled-components";

const ContactContainer = styled.form`
    margin-left: 20%;
    justify-content: center;
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
`;

// const contactform = () => {
//     return (
//         <ContactContainer id="contactSection">
//             <h1>Contact</h1>
//             <p>
//                 Form coming soon, BUT, feel free to email at <a href="mailto:michaelflores@hey.com">michaelflores@hey.com</a> until then.
//             </p>
//         </ContactContainer>
//     )
// };

const contactform = () => {
    return (
      <>
      <h3>Contact Me!</h3>
      <p>Looking for some work to be done? Are you hiring? Tell me below!</p>
        <ContactContainer id="contactSection" name="mikeContactForm" method="POST" data-netlify="true" action="/ThankYou">
          <input type="hidden" name="form-name" value="mikeContactForm" />
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
        </ContactContainer>
        </>
    )
};


export default contactform;
