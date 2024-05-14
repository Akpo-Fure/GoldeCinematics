import styled from "styled-components";
import { Action } from "../shared/Action";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const ServicesComponent = () => {
  return (
    <ServicesContainer>
      <Action>SERVICES / DELIVERABLES</Action>
    </ServicesContainer>
  );
};

export default ServicesComponent;
