import styled from "styled-components";
import device from "./constants/breakpoints";
import HeroComponent from "./components/heroSection/HeroComponent";
import StoryComponent from "./components/ourStory/StoryComponent";
import WorkComponent from "./components/ourWork/WorkComponent";
import ValuesComponent from "./components/ourValues/ValuesComponent";
import ProcessComponent from "./components/ourProcess/ProcessComponent";
import ServicesComponent from "./components/services/ServicesComponent";
import DeliveredComponent from "./components/valueDelivered/DeliveredComponent";
import FooterComponent from "./components/footer/FooterComponent";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10em;

  @media ${device.laptop} {
    gap: 7.5em;
  }

  @media ${device.tablet} {
    gap: 5em;
  }
`;
function App() {
  return (
    <AppContainer>
      <HeroComponent />
      <StoryComponent />
      <WorkComponent />
      <ValuesComponent />
      <ProcessComponent />
      <ServicesComponent />
      <DeliveredComponent />
      <FooterComponent />
    </AppContainer>
  );
}

export default App;
