import { Button, LayoutContainer } from "../../core-ui";
import ShoppingCartItem from "./ShoppingCartItem";
import StyledShoppingCart from "./StyledShoppingCart";
import { data } from "../../SEARCHED_BOOKS";

const ShoppingCart = ({ cartIsShown }) => {
  return (
    <StyledShoppingCart className={cartIsShown ? "active" : ""}>
      {data.items.length > 0 && (
        <LayoutContainer as="ul" vertical={true} gap=".5rem">
          {data.items.map((book) => (
            <ShoppingCartItem
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              img={book.volumeInfo.imageLinks.smallThumbnail}
              price={book.saleInfo.retailPrice.amount}
            />
          ))}
        </LayoutContainer>
      )}

      <Button
        padding=".8rem"
        width="100%"
        fontWeight="bold"
        background="#e3b330"
        color="#f7f7f7"
      >
        PAY NOW
      </Button>
    </StyledShoppingCart>
  );
};
export default ShoppingCart;
