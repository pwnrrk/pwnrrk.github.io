import Elements from "./Elements";
import styled from "styled-components";
import React from "react";

const AboutWrapper = styled.div`
  padding: 3rem 0;
`;

const AboutContent = styled.div`
  line-height: 1.5;
  max-width: 1140px;
  padding: 2rem;
  margin: auto;
`;
const AboutContentParagraph = styled.p`
  line-height: 1.5;
  hyphens: auto;
`;
const PerformanceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 -0.7rem;
  @media (min-width: 768px) {
    padding: 0.5rem -0.7rem;
    flex-direction: row;
  }
`;
const PerformanceItem = styled.div`
  padding: 0.7rem;
  margin: 0.5rem 0;
  padding: 0 0.7rem;
  flex: 1 0 50%;
`;
const PerformanceItemContent = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  height: 100%;
`;
const AboutMeArea = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PerformanceNumber = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #212121;
  /* background-color: var(--primary); */
`;
const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
`;
const CardExample = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ExampleWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  @media (min-width: 998px) {
    flex-direction: row;
    & > div {
      flex: 1 0 50%;
    }
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  img {
    padding: 1rem;
  }
`;

const About = () => (
  <AboutWrapper id="about">
    <AboutContent>
      <CardExample>
        <Avatar src="/avatar.jpg" />
        <AboutMeArea>
          <h3>About Me</h3>
          <AboutContentParagraph>
            Hi, I am Full-Stack Developer from Bangkok Thailand. Mastered with
            Web Sites and Web Applications development. Simplify difficult tasks
            and team plays. Always ready to learn and grows.
          </AboutContentParagraph>
        </AboutMeArea>
      </CardExample>
    </AboutContent>
    <ExampleWrapper>
      <div>
        <Elements.SectionTitle>What I can do</Elements.SectionTitle>
        <PerformanceWrapper>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>1</PerformanceNumber> Experienced on React and
              Vue
            </PerformanceItemContent>
          </PerformanceItem>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>2</PerformanceNumber> Experienced with
              Javascripts, CSS, Node.js, Java and C#
            </PerformanceItemContent>
          </PerformanceItem>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>3</PerformanceNumber> Responsive website
              development
            </PerformanceItemContent>
          </PerformanceItem>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>4</PerformanceNumber> Open mind to learn new
              things
            </PerformanceItemContent>
          </PerformanceItem>
        </PerformanceWrapper>
      </div>
    </ExampleWrapper>
  </AboutWrapper>
);

export default About;
