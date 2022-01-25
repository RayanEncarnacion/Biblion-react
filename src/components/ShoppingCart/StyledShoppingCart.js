import styled from "styled-components";

export default styled.div`
  position: absolute;
  z-index: 100;
  background-color: #f7f7f7;
  color: #121212;
  font-size: 0.8em;
  max-width: 25rem;
  padding: 0 1.5em 1em;
  text-align: center;
  width: 65%;
  height: auto;
  top: 102%;
  right: -105%;
  opacity: 0;
  animation: slideOut 0.3s forwards;

  & button {
    margin-top: 1rem;
  }

  &.active {
    opacity: 1;
    right: 0;
    animation: slideIn 0.3s forwards;
  }
`;
