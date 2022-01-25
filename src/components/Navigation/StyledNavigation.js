import styled from "styled-components";

export default styled.nav`
  align-items: center;
  background-color: #121212;
  border-bottom: 1px solid hsla(0, 0%, 97%, 0.5);
  display: flex;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 1.5rem;

  & img {
    max-width: 60px;
    width: 10%;
  }
`;
