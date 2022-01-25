import styled from "styled-components";
import heroImage from "../../assets/images/heroImage.jpg";

export default styled.div`
  position: relative;
  background-image: url(${heroImage});
  background-position: 0;
  background-size: cover;
  text-align: center;
  padding-bottom: 4em;
  padding-top: 7em;
  padding-left: 1.5em;
  padding-right: 1.5em;

  & h1 {
    font-size: 2.2rem;
  }

  & .text-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    max-width: 800px;
  }
`;
