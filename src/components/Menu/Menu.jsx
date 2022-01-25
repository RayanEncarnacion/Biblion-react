import { LayoutContainer } from "../../core-ui";
import StyledMenu from "./StyledMenu";

const Menu = ({ menuIsShown }) => {
  return (
    <StyledMenu className={menuIsShown ? "active" : ""}>
      <LayoutContainer
        as="ul"
        gap="1.5rem"
        justifyContent="center"
        texCenter={true}
        vertical={true}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#best-sellers">Best Sellers</a>
        </li>
        <li>
          <a href="#new-releases">New Releases</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#Blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </LayoutContainer>
    </StyledMenu>
  );
};
export default Menu;
