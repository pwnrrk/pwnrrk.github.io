const { default: styled } = require("styled-components");

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
`;

const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-weight: 500;
`;

const Link = styled.a`
  color: #212121;
`;

const Home = () => (
  <BannerWrapper id="home">
    <BannerBackgroundWrapper>
      <BannerBackground src="https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" />
      Photo by <Link href="https://unsplash.com/@quaritsch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quaritsch Photography</Link> on <Link href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Link>
    </BannerBackgroundWrapper>
    <BannerTextWrapper>
      <BannerText>
        Full-Stack <BannerTextHighlight>Website Developer</BannerTextHighlight>
      </BannerText>
    </BannerTextWrapper>
  </BannerWrapper>
);
export default Home;
