import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import InfoContent from "../../content/InfoContent.json"

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="doctors.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        icon="hours.svg"
        title={InfoContent.title}
        content={InfoContent.text}
        id="about"
        />

    </Container>
  );
};

export default Home;
