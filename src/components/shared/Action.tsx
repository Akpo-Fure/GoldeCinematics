import styled from "styled-components";
import device from "../../constants/breakpoints";
import colors from "../../constants/colors";
import fontSizes from "../../constants/fonts";

export const Action = styled.div`
  border: 1px solid ${colors.orange1};
  background-color: ${colors.darkGray1};
  font-size: ${fontSizes.xl};
  font-weight: 300;
  padding: 1em;

  @media ${device.tablet} {
    font-size: ${fontSizes.l};
    padding: 0.75em;
  }
`;
