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
        <ContactContainer id="contactSection">
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Your Role: <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
          </form>
        </ContactContainer>
    )
};


export default contactform;
