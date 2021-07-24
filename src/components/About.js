import Elements from "./Elements";

const { default: styled } = require("styled-components");

const AboutWrapper = styled.div`
  background-color: #fff;
  padding: 3rem 0;
`;

const AboutContent = styled.div`
  line-height: 1.5;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin: auto;
`;
const AboutContentParagraph = styled.p`
  line-height: 1.5;
`;
const PerformanceWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  @media (min-width: 768px) {
    padding: 0.5rem;
  }
`;
const PerformanceItem = styled.div`
  flex: 1 0 100%;
  @media (min-width: 768px) {
    flex: 0 1 auto;
    width: 50%;
    padding: 0.5rem 0.7rem;
  }
`;
const PerformanceItemContent = styled.div`
  display: flex;
  align-items: center;
  /* color: var(--primary);
  background-color: #c5d7fd; */
  background-color: #f5f5f5;
  padding: 1rem;
  height: 100%;
`;
const AboutMeArea = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
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

const About = () => (
  <AboutWrapper id="about">
    <AboutContent>
      <AboutMeArea>
        <Elements.SectionTitle>About Me</Elements.SectionTitle>
        <AboutContentParagraph>
          I'm Full Stack Developer from Bangkok Thailand. Experienced with many
          Front-End and Back-End framework. Object Oriented Programming. Clean
          and quality coder.
        </AboutContentParagraph>
      </AboutMeArea>
      <PerformanceWrapper>
        <PerformanceItem>
          <PerformanceItemContent>
            <PerformanceNumber>1</PerformanceNumber> Experienced on React and
            Vue
          </PerformanceItemContent>
        </PerformanceItem>
        <PerformanceItem>
          <PerformanceItemContent>
            <PerformanceNumber>2</PerformanceNumber> Experienced with Java,
            Python, Node.js
          </PerformanceItemContent>
        </PerformanceItem>
        <PerformanceItem>
          <PerformanceItemContent>
            <PerformanceNumber>3</PerformanceNumber> Can make responsive website
          </PerformanceItemContent>
        </PerformanceItem>
        <PerformanceItem>
          <PerformanceItemContent>
            <PerformanceNumber>4</PerformanceNumber> Easy going with teams
          </PerformanceItemContent>
        </PerformanceItem>
      </PerformanceWrapper>
    </AboutContent>
  </AboutWrapper>
);

export default About;
