import { SectionTitle } from "../../core-ui";
import AboutUsText from "./AboutUsText/AboutUsText";
import StyledAboutUs from "./StyledAboutUs";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <SectionTitle first="about" second="us" start={true} />
      <AboutUsText />
    </StyledAboutUs>
  );
};

export default AboutUs;
