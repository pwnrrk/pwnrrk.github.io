import Elements from "./Elements";

const { default: styled } = require("styled-components");

const AboutWrapper = styled.div`
  background-color: #fff;
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
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  height: 100%;
`;
const AboutMeArea = styled.div`
  max-width: 500px;
  min-height: 500px;
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
/*const AvatarWrapper = styled.div`
  flex: none !important;
  padding: 0 !important;
`;*/
/*const Avatar = styled.img`
  width: 180px;
  height: 100%;
  object-fit: cover;
`;*/
/*const CardExample = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 0;
  border-radius: 0.5rem;
  box-shadow: 0 5px 7px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  & > div {
    padding: 0 1rem;
    flex: 1 0 50%;
  }
  &.md {
    max-width: 300px;
    padding: 1rem;
    ${AvatarWrapper} {
      flex: 1 0 100% !important;
      text-align: center;
    }
    ${Avatar} {
      border-radius: 50%;
      height: 180px;
    }
  }
  &.full {
    width: 350px;
    height: 350px;
    position: relative;
    ${AvatarWrapper} {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    ${Avatar} {
      width: 100%;
      height: 100%;
    }
    .describe {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
`;*/
const ExampleWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c98 C 57.6%2c126 172.8%2c248.8 288%2c238 C 403.2%2c227.2 460.8%2c44.6 576%2c44 C 691.2%2c43.4 748.8%2c243.2 864%2c235 C 979.2%2c226.8 1036.8%2c6.2 1152%2c3 C 1267.2%2c-0.2 1382.4%2c175.8 1440%2c219L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c391 C 96%2c400.4 288%2c438.8 480%2c438 C 672%2c437.2 768%2c366.2 960%2c387 C 1152%2c407.8 1344%2c511 1440%2c542L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  @media (min-width: 998px) {
    flex-direction: row;
    & > div {
      flex: 1 0 50%;
    }
  }
`;
/*setInterval(() => {
  var ex = document.getElementById("ex-card");
  if (ex.classList.contains("md")) {
    ex.classList.remove("md");
    ex.classList.add("full");
    return;
  } else if (ex.classList.contains("full")) {
    ex.classList.remove("full");
    return;
  }
  ex.classList.add("md");
}, 3000);*/
const About = () => (
  <AboutWrapper id="about">
    <AboutContent>
      <AboutMeArea>
        <Elements.SectionTitle align="center">About Me</Elements.SectionTitle>
        <AboutContentParagraph>
          I'm Front-End Website Developer from Bangkok
          Thailand. Bachelor in Computer Science and self learner in developing website. I also have responsive and user experience knowledge. Back-End, Data-Structure and Database. 1 year experienced as a freelance in Front-End Developer role. And I always open mind to learning.
        </AboutContentParagraph>
      </AboutMeArea>
    </AboutContent>
    <ExampleWrapper>
      <div>
        <Elements.SectionTitle style={{color: "#fff"}}>What I can do</Elements.SectionTitle>
        <PerformanceWrapper>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>1</PerformanceNumber> Experienced on React and
              Vue
            </PerformanceItemContent>
          </PerformanceItem>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>2</PerformanceNumber> Basic knowledge about Java,
              Python, Node.js
            </PerformanceItemContent>
          </PerformanceItem>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>3</PerformanceNumber> Can make responsive
              website
            </PerformanceItemContent>
          </PerformanceItem>
          <PerformanceItem>
            <PerformanceItemContent>
              <PerformanceNumber>4</PerformanceNumber> Easy going with teams
            </PerformanceItemContent>
          </PerformanceItem>
        </PerformanceWrapper>
      </div>
    </ExampleWrapper>
  </AboutWrapper>
);

export default About;
