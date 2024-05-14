import styled from "styled-components";
import colors from "../../constants/colors";
import device from "../../constants/breakpoints";
import ChevroletLogo from "../../assets/ChevroletLogo.png";
import NewBalanceLogo from "../../assets/NewBalanceLogo.png";
import StregaLogo from "../../assets/StregaLogo.png";
import DuneLogo from "../../assets/DuneJewelryLogo.png";
import UmassLogo from "../../assets/UmassLogo.png";
import BostonLoganLogo from "../../assets/BostonLoganLogo.png";
import { ISponsor } from "../../interfaces/interface";

const SponsorsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  margin: 0 2em;
  padding: 2.5em;
  border: 1.5px solid ${colors.orange1};

  @media ${device.tablet} {
    margin: 0 1em;
    gap: 1.5em;
    padding: 1.5em;
  }

  @media ${device.mobile} {
    margin: 0em;
    gap: 1em;
    padding: 1em;
  }
`;

const SponsorsImage = styled.img`
  height: 60px;

  @media ${device.tablet} {
    height: 40px;
  }

  @media ${device.mobile} {
    height: 30px;
  }
`;

const sponsors = [
  {
    name: "Chevrolet",
    logo: ChevroletLogo,
  },
  {
    name: "New Balance",
    logo: NewBalanceLogo,
  },
  {
    name: "Strega",
    logo: StregaLogo,
  },
  {
    name: "Dune Jewelry",
    logo: DuneLogo,
  },
  {
    name: "UMass",
    logo: UmassLogo,
  },
  {
    name: "Boston Logan",
    logo: BostonLoganLogo,
  },
];

const Sponsors = () => {
  return (
    <SponsorsContainer>
      {sponsors.map((sponsor: ISponsor) => (
        <SponsorsImage src={sponsor.logo} alt={sponsor.name} />
      ))}
    </SponsorsContainer>
  );
};

export default Sponsors;
