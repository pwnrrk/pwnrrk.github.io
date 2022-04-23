import styled from "styled-components";
import Elements from "./Elements";
import React from "react";

const ContactWrapper = styled.footer`
  padding: 1rem 1rem;
  background-color: #212121;
  text-align: center;
  margin: auto;
  line-height: 2;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => (
  <ContactWrapper>
    <Elements.SectionTitle>Contact Me</Elements.SectionTitle>
    <div>
      <ContactLink href="mailto:r.phuwanat.dev@gmail.com">
        Email: r.phuwanat.dev@gmail.com
      </ContactLink>
    </div>
    <div>© 2020 R.Phuwanat Thailand | All rights reserved</div>
  </ContactWrapper>
);

export default Contact;
