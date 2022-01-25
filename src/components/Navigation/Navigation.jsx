import { useState } from "react";
import Logo from "../../assets/images/books-book-svgrepo-com.svg";
import FlexBtnsContainer from "./FlexBtnsContainer";
import StyledNavigation from "./StyledNavigation";
import Search from "../Search";
import ShoppingCart from "../ShoppingCart";
import Menu from "../Menu";

const Navigation = () => {
  const [searchIsShown, setSearchIsShown] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(false);

  const toogleSearchHandler = () => setSearchIsShown((prev) => !prev);
  const toogleCartHandler = () => setCartIsShown((prev) => !prev);
  const toogleMenuHandler = () => setMenuIsShown((prev) => !prev);

  return (
    <StyledNavigation>
      <img src={Logo} alt="A pile of gold books" />
      <FlexBtnsContainer
        toogleSearch={toogleSearchHandler}
        toogleMenu={toogleMenuHandler}
        toogleCart={toogleCartHandler}
      />
      {/* Absolute Positioned Elements */}
      <Search searchIsShown={searchIsShown} />
      <ShoppingCart cartIsShown={cartIsShown} />
      <Menu menuIsShown={menuIsShown} />
    </StyledNavigation>
  );
};
export default Navigation;
