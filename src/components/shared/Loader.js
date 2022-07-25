import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import theme from "../../styles/theme";

const Container = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${theme.primaryColor};
    border-color: ${theme.primaryColor} transparent ${theme.primaryColor}
      transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Loader = () => {
  return (
    <Container aria-busy="true" aria-live="polite">
      <Spinner id="loading"></Spinner>
    </Container>
  );
};

export default Loader;
