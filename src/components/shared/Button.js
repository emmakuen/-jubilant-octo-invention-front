import styled from "@emotion/styled";
import theme from "../../styles/theme";

const PrimaryButton = styled.button`
  background-color: ${theme.primaryColor};
  padding: 0.4rem 1.2rem;
  color: ${theme.backgroundColor};
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    filter: saturate(1.5);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const SecondaryButton = styled.button`
  color: ${(props) =>
    props.isLiked ? theme.primaryColor : theme.textSecondaryColor};
  font-size: 0.8rem;
  transition: 0.3s ease;

  &:active,
  &:hover {
    color: ${theme.primaryColor};
    filter: ${(props) => props.isLiked && "saturate(1.5)"};
  }
`;

export default function Button({ text, primary, secondary, ...otherProps }) {
  if (secondary)
    return <SecondaryButton {...otherProps}>{text}</SecondaryButton>;

  return <PrimaryButton {...otherProps}>{text}</PrimaryButton>;
}
