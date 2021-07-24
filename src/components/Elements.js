import styled from "styled-components";

const Button = `
display: inline-block;
border: 1px solid transparent;
border-radius: 0.1rem;
padding: 0.7rem 2.7rem;
color: #fff;
background-color: #212121;
cursor: pointer;
transition: background-color 0.25s ease-out;
&:hover {
  background-color: #454545;
}`;

const StyledButton = styled.button`
  ${Button}
`;

const LinkButton = styled.a`
  ${Button}
  text-decoration: none;
`;

const SectionTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;

const Elements = {
  StyledButton,
  LinkButton,
  SectionTitle
};

export default Elements;
