import styled from "styled-components";
import { Action } from "../shared/Action";
import { SmallSpan } from "../shared/Span";

const DeliveredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const DeliveredComponent = () => {
  return (
    <DeliveredContainer>
      <Action>VALUE DELIVERED</Action>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SmallSpan>
          Our goal-driven films connect deeply with audiences, striking a
          balance between
        </SmallSpan>
        <SmallSpan>
          entertainment and inspiration. Tailored to resonate with specific
          audiences, our
        </SmallSpan>
        <SmallSpan>content is crafted to deliver</SmallSpan>
      </div>
    </DeliveredContainer>
  );
};

export default DeliveredComponent;
