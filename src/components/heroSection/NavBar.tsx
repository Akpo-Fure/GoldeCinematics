import styled from "styled-components";
import fontSizes from "../../constants/fonts";
import colors from "../../constants/colors";
import { NavBarData } from "../../interfaces/interface";
import GoldeCinematicsLogo from "../../assets/GoldeCinematicsLogo.png";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3em;
  padding: 1.5em;
`;

const NavLink = styled.a`
  font-size: ${fontSizes.l};
  font-weight: 300;
  color: ${colors.white1};
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${colors.orange1};
    transform: rotateX(15deg);
  }
`;

const NavBar = () => {
  const navBarData = [
    {
      name: "OUR WORK",
      link: "/",
      isIcon: false,
    },
    {
      name: "OUR PROCESS",
      link: "/",
      isIcon: false,
    },
    {
      name: "GOLDE CINEMATICS",
      link: "/",
      isIcon: true,
      icon: GoldeCinematicsLogo,
    },
    {
      name: "ABOUT US",
      link: "/",
      isIcon: false,
    },
    {
      name: "CONTACT US",
      link: "/",
      isIcon: false,
    },
  ];

  return (
    <NavBarContainer>
      {navBarData.map((data: NavBarData) => {
        return data.isIcon ? (
          <img src={data.icon} alt={data.name} width={60} height={50} />
        ) : (
          <NavLink href={data.link}>{data.name}</NavLink>
        );
      })}
    </NavBarContainer>
  );
};

export default NavBar;
