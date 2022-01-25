import StyledSectionTitle from "./StyledSectionTitle";

const SectionTitle = ({ first, second, start, end }) => {
  return (
    <StyledSectionTitle>
      <span className={start && "accent"}>{first}</span>
      <span className={end && "accent"}>{second}</span>
    </StyledSectionTitle>
  );
};

export default SectionTitle;
