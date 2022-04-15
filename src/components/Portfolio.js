import styled from "styled-components";
import Elements from "./Elements";
import React from "react";

const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1140px;
  margin: 3rem auto;
`;

const PortfolioContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 3rem 0;
`;

const PortfolioItem = styled.a`
  @media (min-width: 1140px) {
    flex: 0 1 auto;
    width: 25%;
  }
  padding: 0.5rem;
  text-decoration: none;
  color: var(--body-color);
`;

const PortfolioItemCoverWrapper = styled.div`
  height: 150px;
`;

const PortfolioItemCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PortfolioItemTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

const PortfolioItemContent = styled.p`
  line-height: 1.5;
`;

const Portfolio = () => (
  <PortfolioWrapper id="projects">
    {/*<Elements.SectionTitle>Projects</Elements.SectionTitle>
    <PortfolioContent>
      <PortfolioItem href="https://pwnrrk.github.io/minimalbootstrap">
        <PortfolioItemCoverWrapper>
          <PortfolioItemCover src="/mb-ico.png" />
        </PortfolioItemCoverWrapper>
        <PortfolioItemTitle>Minimal Bootstrap</PortfolioItemTitle>
        <PortfolioItemContent>
          My NPM package that I've create to learn about CSS and SCSS.
        </PortfolioItemContent>
      </PortfolioItem>
      <PortfolioItem href="https://pwnrrk.github.io/minimaleditor">
        <PortfolioItemCoverWrapper>
          <PortfolioItemCover src="/me-ico.png" />
        </PortfolioItemCoverWrapper>
        <PortfolioItemTitle>Minimal Editor</PortfolioItemTitle>
        <PortfolioItemContent>
          Simple text editor. Created for learning Javascript.
        </PortfolioItemContent>
      </PortfolioItem>
      <PortfolioItem href="https://pwnrrk.github.io/ricky-wiki">
        <PortfolioItemCoverWrapper>
          <PortfolioItemCover src="/logo.png" />
        </PortfolioItemCoverWrapper>
        <PortfolioItemTitle>Ricky Wiki</PortfolioItemTitle>
        <PortfolioItemContent>
          Information website created for learning React.js
        </PortfolioItemContent>
      </PortfolioItem>
    </PortfolioContent>*/}
    <Elements.SectionTitle>Experiences</Elements.SectionTitle>
    <PortfolioContent>
      <PortfolioItem href="https://matchday.co.th">
        <PortfolioItemCoverWrapper>
          <PortfolioItemCover src="https://matchday.co.th/favicon.ico" />
        </PortfolioItemCoverWrapper>
        <PortfolioItemTitle>
          Internship at MATCHDAY HUB Co.,Ltd.
        </PortfolioItemTitle>
        <PortfolioItemContent>
          <div>Front-End Developer</div>
          <div>November 2020 - March 2021</div>
        </PortfolioItemContent>
      </PortfolioItem>
      <PortfolioItem href="https://www.ttcl.com">
        <PortfolioItemCoverWrapper>
          <PortfolioItemCover src="https://www.ttcl.com/images/logo.png" />
        </PortfolioItemCoverWrapper>
        <PortfolioItemTitle>
          IT Engineer at TTCL Public Company Limited
        </PortfolioItemTitle>
        <PortfolioItemContent>
          <div>Full-Stack Developer</div>
          <div>February 2022 - Now</div>
        </PortfolioItemContent>
      </PortfolioItem>
    </PortfolioContent>
  </PortfolioWrapper>
);

export default Portfolio;
