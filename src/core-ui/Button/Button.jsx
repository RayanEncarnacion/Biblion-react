import StyledButton from "./StyledButton";

const Button = ({
  children,
  color,
  width,
  maxWidth,
  background,
  padding,
  border,
  fontSize,
  fontWeight,
  onClick,
  as,
  href,
}) => {
  return (
    <StyledButton
      href={href}
      as={as}
      width={width}
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      border={border}
      padding={padding}
      maxWidth={maxWidth}
      background={background}
      color={color}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
