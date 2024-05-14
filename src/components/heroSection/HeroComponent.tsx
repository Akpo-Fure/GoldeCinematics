import styled from "styled-components";
import colors from "../../constants/colors";
import device from "../../constants/breakpoints";
import NavBar from "./NavBar";
import HeroText from "./HeroText";
import VideoComponent from "./Video";
import Sponsors from "./Sponsors";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 7.5em;
  border: 1.5px solid ${colors.orange1};
  border-top: none;

  @media ${device.desktop} {
    margin: 0 5em;
  }

  @media ${device.tablet} {
    margin: 0 2em;
  }

  @media ${device.mobile} {
    margin: 0 0.5em;
  }
`;

const EmptyDiv = styled.div`
  margin: 0 7.5em;
  height: 40px;
  border-left: 1.5px solid ${colors.orange1};
  border-right: 1.5px solid ${colors.orange1};

  @media ${device.desktop} {
    margin: 0 5em;
  }

  @media ${device.tablet} {
    margin: 0 2em;
  }

  @media ${device.mobile} {
    margin: 0 0.5em;
  }
`;

const HeroComponent = () => {
  return (
    <div>
      <HeroContainer>
        <NavBar />
        <HeroText />
      </HeroContainer>
      <div>
        <VideoComponent />
        <EmptyDiv />
        <Sponsors />
      </div>
    </div>
  );
};

export default HeroComponent;
