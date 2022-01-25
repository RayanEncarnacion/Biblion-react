import StyledShoppingCartItem from "./StyledShoppingCartItem";
import { GrFormClose } from "react-icons/gr";
import { Button } from "../../../core-ui";

const ShoppingCartItem = ({ img, title, price, id }) => {
  return (
    <StyledShoppingCartItem id={id}>
      <img src={img} alt={`Image of ${title}`} />
      <h4>
        {title} <br></br> <small>{`$${price}`}</small>
      </h4>
      <Button
        children={<GrFormClose />}
        color="#121212"
        fontSize="1.1rem"
        fontWeight="bold"
      />
    </StyledShoppingCartItem>
  );
};
export default ShoppingCartItem;
