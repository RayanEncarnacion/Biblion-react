import styled from "styled-components";

export default styled.div`
  position: absolute;
  font-size: 1.1em;
  max-width: 400px;
  padding: 2em 0;
  width: 65%;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  max-width: 25rem;
  z-index: 100;
  background-color: #f7f7f7;
  top: 102%;
  right: -105%;
  animation: slideOut 0.4s;
  opacity: 0;
  text-align: center;

  & a {
    color: #121212;
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  &.active {
    opacity: 1;
    right: 0;
    animation: slideIn 0.3s;
  }
`;
