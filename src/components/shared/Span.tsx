import styled from "styled-components";
import colors from "../../constants/colors";
import fontSizes from "../../constants/fonts";
import device from "../../constants/breakpoints";

export const HeroSpan = styled.span`
  font-size: ${fontSizes.xxxxxxxl};
  font-weight: bold;
  color: ${({ color }) => color || colors.white1};
  text-align: center;
  margin: 0;
  line-height: 1;

  @media ${device.desktop} {
    font-size: ${fontSizes.xxxxxxl};
  }
  @media ${device.laptop} {
    font-size: ${fontSizes.xxxxxl};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.xxxxl};
  }
  @media ${device.mobile} {
    font-size: 2.5em;
  }
`;

export const SmallSpan = styled.span`
  font-size: ${fontSizes.xl};
  font-family: sans-serif;
  color: ${colors.white1};
  text-align: center;
  margin: 0;

  @media ${device.desktop} {
    font-size: ${fontSizes.xl};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.l};
  }

  @media ${device.mobile} {
    font-size: ${fontSizes.m};
  }
`;
