import React from "react";
import styled from "styled-components";
import { Button } from "../ButtonElements";
import emailjs from "emailjs-com";

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
  padding: 24px;
  color: white;
  background: #101522;
  padding-bottom: 20px;
  /* background: linear-gradient(to right, #6c63ff, #c77cf1); */
  max-width: 100vw;
  /* border: px solid black; */

  @media screen and (max-width: 540px) {
    padding-bottom: 0px;
  }
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 4px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida", "Grande",
    "Lucida Sans", "Arial", sans-serif;
  font-size: 24px;
  color: white;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 15px;
  color: white;
`;

export const Form = styled.form`
  justify-content: center;
  display: flex;
  align-items: center;
  /* padding: 20px;
  margin: 0 0 16px 0; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 16px;
  margin-right: 10px;
  outline: none;
  border: none;
  border: 1px #fff solid;
  background-color: #fff;
  /* width: 300px; */

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    margin: 0 0 16px 0;
    width: 100%;
  }
`;

const FooterSubcribe = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p5hqi2r",
        "template_3ord70l",
        e.target,
        "user_Oe0WJW6g8rbNFx53djMvc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <FooterSubscription>
      <FooterSubHeading>
        Join our exclusive list to recieve constant update from us.
      </FooterSubHeading>
      <FooterSubText>Subscribe to our newsletter</FooterSubText>

      <Form onSummit={sendEmail}>
        <FormInput name="email" type="email" placeholder=" Your Email" />
        <Button fontBig> Subscribe </Button>
      </Form>
    </FooterSubscription>
  );
};

export default FooterSubcribe;

// <form onSummit={sendEmail}>
//   <input name='name' type='text' placeholder='name'/>
//   <input name='message' type='text' placeholder='subject'/>
//   <input name='email' type='text' placeholder='email'/>
//   <button >Submit Now</button>
// </form>
