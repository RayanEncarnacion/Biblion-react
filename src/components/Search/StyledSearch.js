import styled from "styled-components";

export default styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  height: 2.5rem;
  justify-content: space-between;
  max-width: 25rem;
  width: 100%;
  padding: 1.5rem 1rem;
  z-index: 100;
  background-color: #f7f7f7;
  top: 102%;
  right: -105%;
  animation: slideOut 0.4s forwards;
  opacity: 0;
  font-size: 1.1rem;

  &.active {
    opacity: 1;
    right: 0;
    animation: slideInBounce 0.7s forwards;
  }

  & input {
    color: #121212;
    font-size: 1em;
    background-color: #f7f7f7;
    width: 100%;
    outline: none;
    border: none;
    padding: 0;
    font-size: 0.9rem;
  }

  & button {
    color: #121212;
  }
`;
