import styled from "styled-components";
import { Action } from "../shared/Action";

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const ValuesComponent = () => {
  return (
    <ValuesContainer>
      <Action>OUR VALUES</Action>
    </ValuesContainer>
  );
};

export default ValuesComponent;
