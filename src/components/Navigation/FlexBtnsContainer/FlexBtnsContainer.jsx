import StyledFlexBtnsContainer from "./StyledFlexBtnsContainer";
import { Button } from "../../../core-ui";
import { FaSearch } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";

const FlexBtnsContainer = ({ toogleSearch, toogleCart, toogleMenu }) => {
  return (
    <StyledFlexBtnsContainer>
      <Button
        children={<FaSearch />}
        onClick={() => toogleSearch()}
        color="#f7f7f7"
        fontSize="1.2rem"
      />
      <Button
        children={<BsFillCartFill />}
        onClick={() => toogleCart()}
        color="#f7f7f7"
        fontSize="1.2rem"
      />
      <Button
        children={<ImMenu />}
        onClick={() => toogleMenu()}
        color="#f7f7f7"
        fontSize="1.2rem"
      />
    </StyledFlexBtnsContainer>
  );
};
export default FlexBtnsContainer;
