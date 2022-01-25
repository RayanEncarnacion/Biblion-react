import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../core-ui";
import StyledSearch from "./StyledSearch";

const Search = ({ searchIsShown }) => {
  const inputRef = useRef();

  return (
    <StyledSearch className={searchIsShown ? "active" : ""}>
      <input
        ref={inputRef}
        type="search"
        name="search"
        placeholder="Search..."
      />
      <Button fontSize=".9rem">
        <FaSearch />
      </Button>
    </StyledSearch>
  );
};
export default Search;
