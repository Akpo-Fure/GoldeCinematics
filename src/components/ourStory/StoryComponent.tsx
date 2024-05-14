import styled from "styled-components";
import colors from "../../constants/colors";
import { Action } from "../shared/Action";
import { HeroSpan } from "../shared/Span";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const StoryComponent = () => {
  return (
    <StoryContainer>
      <Action>OUR STORY</Action>
      <p>
        <HeroSpan>MEET </HeroSpan>{" "}
        <HeroSpan color={colors.orange1}>JOHN</HeroSpan>
      </p>
    </StoryContainer>
  );
};

export default StoryComponent;
