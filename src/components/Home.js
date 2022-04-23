import styled from "styled-components";
import React from "react";
import Elements from "./Elements";
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BannerTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const BannerText = styled.div`
  font-size: 3.5rem;
  line-height: 4.5rem;
  text-align: center;
`;
const BannerTextHighlight = styled.span`
  font-size: 4.5rem;
  font-weight: 600;
`;

const navLinkClick = (event) => {
  event.preventDefault();
  let target = event.target.href;
  target = target.split("#");
  const id = target[target.length - 1];
  const targetSection = document.getElementById(id);
  targetSection.scrollIntoView({ behavior: "smooth" });
};
const Home = () => (
  <BannerWrapper id="home">
    <BannerTextWrapper>
      <BannerText>
        Full-Stack <BannerTextHighlight>Developer</BannerTextHighlight>
      </BannerText>
    </BannerTextWrapper>
    <Elements.LinkButton onClick={navLinkClick} href="#about">
      See More
    </Elements.LinkButton>
  </BannerWrapper>
);
export default Home;
