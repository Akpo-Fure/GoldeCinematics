import styled from "styled-components";

import { Action } from "../shared/Action";
import { HeroSpan } from "../shared/Span";

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const WorkComponent = () => {
  return (
    <WorkContainer>
      <Action>OUR WORK</Action>
      <HeroSpan>COOL INNOVATIONS</HeroSpan>
    </WorkContainer>
  );
};

export default WorkComponent;
