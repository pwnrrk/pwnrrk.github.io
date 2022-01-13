import styled from "styled-components";
import React from "react";

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const BannerBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1082%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(35%2c 105%2c 161%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c474.892C96.62%2c468.915%2c196.956%2c484.961%2c282.293%2c439.257C370.877%2c391.814%2c430.741%2c306.93%2c478.597%2c218.568C529.09%2c125.336%2c582.741%2c23.271%2c564.118%2c-81.108C545.647%2c-184.63%2c469.261%2c-273.151%2c380.737%2c-329.91C302.071%2c-380.348%2c202.06%2c-360.401%2c109.419%2c-372.647C32.942%2c-382.756%2c-41.624%2c-415.486%2c-116.156%2c-395.591C-191.554%2c-375.465%2c-238.82%2c-306.939%2c-303.01%2c-262.559C-393.181%2c-200.216%2c-529.196%2c-183.745%2c-569.828%2c-81.929C-609.896%2c18.472%2c-544.961%2c130.047%2c-498.676%2c227.738C-452.911%2c324.332%2c-401.436%2c428.159%2c-305.666%2c475.625C-212.487%2c521.806%2c-103.797%2c481.312%2c0%2c474.892' fill='%23205f91'%3e%3c/path%3e%3cpath d='M1920 1976.4299999999998C2086.955 1979.386 2142.301 1734.577 2285.84 1649.259 2437.6710000000003 1559.012 2702.936 1631.685 2772.872 1469.4940000000001 2843.38 1305.976 2626.254 1155.811 2571.706 986.299 2529.21 854.241 2551.391 710.899 2488.9030000000002 587.0419999999999 2413.246 437.082 2338.064 252.38 2177.145 204.245 2016.266 156.12300000000005 1856.247 276.95799999999997 1706.539 353.02 1579.951 417.33500000000004 1458.125 493.121 1377.934 610.297 1302.7930000000001 720.095 1295.667 855.881 1272.713 986.934 1248.988 1122.389 1185.3690000000001 1264.3220000000001 1241.382 1389.915 1297.473 1515.682 1458.203 1546.405 1562.3899999999999 1636.452 1689.402 1746.226 1752.15 1973.4589999999998 1920 1976.4299999999998' fill='%232774b1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1082'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
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
  font-weight: 600;
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Link = styled.a`
  color: #212121;
`;

const Home = () => (
  <BannerWrapper id="home">
    <BannerBackgroundWrapper>
      {/*<BannerBackground src="/bannerPencil.jpg" />*/}
      {/*<ImageCaption>
        Photo by{" "}
        <Link href="https://unsplash.com/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Joanna Kosinska
        </Link>{" "}
        on{" "}
        <Link href="https://unsplash.com/collections/3833048/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </Link>
      </ImageCaption>*/}
    </BannerBackgroundWrapper>
    <BannerTextWrapper>
      <BannerText>
        Front-End <BannerTextHighlight>Website Developer</BannerTextHighlight>
      </BannerText>
    </BannerTextWrapper>
  </BannerWrapper>
);
export default Home;
