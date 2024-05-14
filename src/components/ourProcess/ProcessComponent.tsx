import styled from "styled-components";
import colors from "../../constants/colors";
import { Action } from "../shared/Action";
import { HeroSpan, SmallSpan } from "../shared/Span";

const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const ProcessComponent = () => {
  return (
    <ProcessContainer>
      <Action>OUR PROCESS</Action>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeroSpan>CRAFTING YOUR </HeroSpan>{" "}
        <HeroSpan color={colors.orange1}>NARRATIVE</HeroSpan>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SmallSpan>
          Embarking on a storytelling journey with us is a kin to producing a
          captivating movie that resonates deeply{" "}
        </SmallSpan>
        <SmallSpan>
          deeply with your audience. Heres how our cinematic process unfolds,
          designed to spotlight the
        </SmallSpan>
        <SmallSpan>
          escence of your work through the lens of storytelling
        </SmallSpan>
      </div>
    </ProcessContainer>
  );
};

export default ProcessComponent;
