import StyledLayoutContainer from "./StyledLayoutContainer";

const LayoutContainer = ({
  as,
  children,
  gap,
  justifyContent,
  textCenter,
  vertical,
  alignItems,
}) => {
  return (
    <StyledLayoutContainer
      as={as}
      justifyContent={justifyContent}
      alignItems={alignItems}
      textCenter={textCenter}
      gap={gap}
      vertical={vertical}
    >
      {children}
    </StyledLayoutContainer>
  );
};

export default LayoutContainer;
