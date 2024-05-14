import styled from "styled-components";
import { useState } from "react";
import fontSizes from "../../constants/fonts";
import device from "../../constants/breakpoints";
import colors from "../../constants/colors";
import { INavBarData } from "../../interfaces/interface";
import GoldeCinematicsLogo from "../../assets/GoldeCinematicsLogo.png";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3em;
  padding: 1.5em;

  @media ${device.tablet} {
    display: none;
  }
`;

const NavBarContainerMobile = styled.div`
  display: none;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
    flex-direction: column;
  }
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
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
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
    <>
      <NavBarContainer>
        {navBarData.map((data: INavBarData) => {
          return data.isIcon ? (
            <img src={data.icon} alt={data.name} width={60} height={50} />
          ) : (
            <NavLink href={data.link}>{data.name}</NavLink>
          );
        })}
      </NavBarContainer>
      <NavBarContainerMobile>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0em 1em",
          }}
        >
          <img
            src={GoldeCinematicsLogo}
            alt="Golde Cinematics"
            width={30}
            height={30}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <button
              onClick={() => setIsNavBarOpen(!isNavBarOpen)}
              style={{
                transform: isNavBarOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "all 0.3s ease-in-out",
                color: colors.white1,
                fontSize: fontSizes.xxl,
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              ☰
            </button>
          </div>
        </div>
        <div
          style={{
            display: isNavBarOpen ? "flex" : "none",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          {navBarData
            .filter((data) => data.name !== "GOLDE CINEMATICS")
            .map((data: INavBarData) => (
              <NavLink
                href={data.link}
                style={{
                  textAlign: "center",
                  fontSize: fontSizes.l,
                  fontWeight: 300,
                }}
              >
                {data.name}
              </NavLink>
            ))}
        </div>
      </NavBarContainerMobile>
    </>
  );
};

export default NavBar;
