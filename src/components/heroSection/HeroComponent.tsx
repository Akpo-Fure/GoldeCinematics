import styled from "styled-components";
import colors from "../../constants/colors";
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
        <div
          style={{
            margin: "0 7.5em",
            height: "40px",
            borderLeft: `1.5px solid ${colors.orange1}`,
            borderRight: `1.5px solid ${colors.orange1}`,
          }}
        ></div>
        <Sponsors />
      </div>
    </div>
  );
};

export default HeroComponent;
