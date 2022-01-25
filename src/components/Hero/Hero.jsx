import { Button } from "../../core-ui";
import StyledHero from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div className="bg-darken"></div>
      <div className="text-container">
        <h1>Best books to read at any moment</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          possimus inventore amet magnam sunt odio excepturi nulla similique
          explicabo ullam.
        </p>
        <Button
          as="a"
          href="#best-sellers"
          color="#f7f7f7"
          maxWidth="180px"
          padding=".8rem 1.3rem"
          fontSize="1rem"
          fontWeight="bold"
          background="#d7a419"
          children="GET YOURS NOW"
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
