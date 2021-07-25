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
const AvatarWrapper = styled.div`
  flex: none !important;
  padding: 0 !important;
`;
const Avatar = styled.img`
  width: 180px;
  height: 100%;
  object-fit: cover;
`;
const CardExample = styled.div`
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
`;
const ExampleWrapper = styled.div`
  background-image: url("/about.jpg");
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 998px) {
    flex-direction: row;
    & > div {
      flex: 1 0 50%;
    }
  }
`;
setInterval(() => {
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
}, 3000);
const About = () => (
  <AboutWrapper id="about">
    <AboutContent>
      <AboutMeArea>
        <Elements.SectionTitle align="center">About Me</Elements.SectionTitle>
        <AboutContentParagraph>
          I'm Front-End Website Developer from Bangkok
          Thailand. Self learner in developing website. I also have good
          responsive and user experience knowledge. Plus basic about Back-End, Data-Structure and Database. 1 year experienced of many
          part-time remote work.
        </AboutContentParagraph>
      </AboutMeArea>
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
      <div>
        <CardExample id="ex-card" className="full">
          <AvatarWrapper>
            <Avatar src="https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
          </AvatarWrapper>
          <div className="describe">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              Photo by{" "}
              <Elements.Link href="https://unsplash.com/@mathildelangevin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Mathilde Langevin
              </Elements.Link>{" "}
              on{" "}
              <Elements.Link href="https://unsplash.com/s/photos/woman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </Elements.Link>
            </div>
          </div>
        </CardExample>
      </div>
    </ExampleWrapper>
  </AboutWrapper>
);

export default About;
