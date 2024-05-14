import styled from "styled-components";
import fontSizes from "../../constants/fonts";
import colors from "../../constants/colors";
import device from "../../constants/breakpoints";
import { HeroSpan, SmallSpan } from "../shared/Span";

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0em;
  width: 100%;
  padding: 4em 0em;
  border-top: 1px solid ${colors.orange1};

  @media ${device.tablet} {
    padding: 2em 0em;
  }
`;

const HeroText = () => {
  return (
    <HeroTextContainer>
      <HeroSpan>ELEVATE YOUR</HeroSpan>
      <HeroSpan>STORYTELLING WITH</HeroSpan>
      <HeroSpan color={colors.orange1}>GOLDE CINEMATICS</HeroSpan>
      <SmallSpan
        style={{
          marginTop: "1em",
        }}
      >
        From captivating visuals to immersive narratives, we specialize in
        bringing
      </SmallSpan>
      <SmallSpan>
        your ideas to life on the silver screen. Let us evaluate your vision
        with our
      </SmallSpan>
      <SmallSpan>passion, creativity, and dedication to excellence.</SmallSpan>
    </HeroTextContainer>
  );
};

export default HeroText;
