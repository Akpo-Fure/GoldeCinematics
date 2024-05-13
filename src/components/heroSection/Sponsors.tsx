import styled from "styled-components";
import colors from "../../constants/colors";
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
        <img height={60} src={sponsor.logo} alt={sponsor.name} />
      ))}
    </SponsorsContainer>
  );
};

export default Sponsors;
