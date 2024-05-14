import styled from "styled-components";
import colors from "../../constants/colors";
import { HeroSpan } from "../shared/Span";
import FooterBox from "./FooterBox";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const VerticalDivider = styled.div`
  height: 200px;
  width: 1.5px;
  background-color: ${colors.orange1};
`;

const FooterComponent = () => {
  return (
    <FooterContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1em",
        }}
      >
        <HeroSpan>LET'S MAKE MAGIC</HeroSpan>
        <HeroSpan color={colors.orange1}>TOGETHER</HeroSpan>
      </div>
      <VerticalDivider />
      <FooterBox />
    </FooterContainer>
  );
};

export default FooterComponent;
