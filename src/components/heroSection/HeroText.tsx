import fontSizes from "../../constants/fonts";
import styled from "styled-components";
import colors from "../../constants/colors";

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0em;
  width: 100%;
  padding: 4em 0em;
  border-top: 1px solid ${colors.orange1};
`;

const HeroSpan = styled.span`
  font-size: ${fontSizes.xxxxxxl};
  font-weight: bold;
  color: ${({ color }) => color || colors.white1};
  text-align: center;
  margin: 0;
  line-height: 1;
`;

const SmallSpan = styled.span`
  font-size: ${fontSizes.xl};
  font-family: sans-serif;
  color: ${colors.white1};
  text-align: center;
  margin: 0;
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