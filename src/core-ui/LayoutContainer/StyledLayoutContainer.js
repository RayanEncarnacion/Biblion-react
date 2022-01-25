import styled from "styled-components";

export default styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  gap: ${({ gap }) => gap ?? "1rem"};
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? ""};
  list-style-type: none;
  width: 100%;
  text-align: ${({ textCenter }) => (textCenter ? "center" : "")};
`;
