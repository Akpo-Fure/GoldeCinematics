import styled from "styled-components";
import colors from "../../constants/colors";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.orange1};
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.orange1};
  width: 100%;
  gap: 1em;
  padding: 1em 0em;
  //   padding: 1em;
`;

const FooterText = styled.p`
  margin: 0;
  text-transform: uppercase;
`;

const FooterBox = () => {
  return (
    <Box>
      <Footer style={{ marginTop: "1em" }}>
        <FooterText style={{ fontWeight: "lighter", marginLeft: "1em" }}>
          Home
        </FooterText>
        <FooterText style={{ fontWeight: "bold" }}>
          © All rights reserved by Golde Cinematics
        </FooterText>
        <FooterText style={{ fontWeight: "lighter", marginRight: "1em" }}>
          Contact
        </FooterText>
      </Footer>
    </Box>
  );
};

export default FooterBox;
