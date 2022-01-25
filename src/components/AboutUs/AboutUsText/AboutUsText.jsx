import aboutImage from "../../../assets/images/about.jpg";
import { Button, LayoutContainer } from "../../../core-ui";

const imageStyles = { width: "100%" };

const AboutUsText = () => {
  return (
    <LayoutContainer gap=".7rem" vertical={true} alignItems="flex-start">
      <img style={imageStyles} src={aboutImage} alt="About image" />
      <h2>
        What makes our <span className="accent">books</span> special?
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        corporis facere, assumenda velit praesentium nemo. Ducimus perferendis
        laudantium recusandae a. <br></br> Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Voluptate doloremque cum molestiae
        consequatur laborum explicabo qui facilis laboriosam deleniti sit.
      </p>
      <Button
        as="a"
        href="#"
        children="Learn More"
        background="#d7a419"
        fontWeight="bold"
        padding=".8rem 1.3rem"
        fontSize="1rem"
        maxWidth="180px"
      />
    </LayoutContainer>
  );
};

export default AboutUsText;
