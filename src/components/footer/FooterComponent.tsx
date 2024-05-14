import styled from "styled-components";
import colors from "../../constants/colors";
import { HeroSpan } from "../shared/Span";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterComponent = () => {
  return (
    <FooterContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeroSpan>LET'S MAKE MAGIC</HeroSpan>
        <HeroSpan color={colors.orange1}>TOGETHER</HeroSpan>
      </div>
    </FooterContainer>
  );
};

export default FooterComponent;
