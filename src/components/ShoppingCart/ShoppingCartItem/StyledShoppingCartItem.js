import styled from "styled-components";

export default styled.div`
  align-items: center;
  border-bottom: 2px solid hsla(0, 0%, 7%, 0.05);
  display: flex;
  gap: 1em;
  justify-content: space-around;
  padding: 1em 0.5em;
  width: 100%;

  & img {
    width: 30%;
  }

  & h4 {
    font-weight: 700;
    width: 60%;
    line-height: 1.2;

    & small {
      font-weight: 400;
    }
  }

  button {
    margin: 0 !important;
  }

  // & svg {
  //   border: 2px solid transparent;
  //   cursor: pointer;
  //   padding: 5px;
  //   transition: all 0.2s ease-in-out;
  // }
`;
