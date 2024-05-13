import styled from "styled-components";
import colors from "../../constants/colors";
import NavBar from "./NavBar";
import HeroText from "./HeroText";
import VideoComponent from "./Video";

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
      <div
        style={{
          margin: "0 2.5em",
        }}
      >
        <VideoComponent />
      </div>
    </div>
  );
};

export default HeroComponent;
