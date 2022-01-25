import styled from "styled-components";

export default styled.button`
  color: ${({ color }) => color ?? "inherit"};
  background-color: ${({ background }) => background ?? "transparent"};
  outline: ${({ outline }) => outline ?? "none"};
  outline: ${({ outline }) => outline ?? "none"};
  border: ${({ border }) =>
    border
      ? `${border.width || 0} ${border.type || ""} ${border.color || ""} `
      : "none"};
  font-size: ${({ fontSize }) => fontSize ?? "1em"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  width: ${({ width }) => width ?? ""};
  max-width: ${({ maxWidth }) => maxWidth ?? ""};
  padding: ${({ padding }) => padding ?? ""};
`;
