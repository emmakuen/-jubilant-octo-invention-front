import styled from "@emotion/styled";
import theme from "../styles/theme";

import Loader from "./shared/Loader";
import ProfileInfo from "./ProfileInfo";

const Avatar = styled.img`
  height: auto;
  min-width: ${theme.avatarSize};
  max-height: ${theme.avatarSize};
  border-radius: 50%;
  border: 1px solid ${theme.borderColor};
  transition: 0.3s ease;
  &:hover {
    border: 1px solid ${theme.primaryColor};
    transform: ${(props) => props.scaled && "scale(1.2)"};
  }
`;

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 2rem;
  min-height: 90vh;
  display: ${(props) => props.centered && "flex"};
  gap: ${(props) => props.gapped && "2rem"};
  flex-direction: ${(props) => props.centered && "column"};
  align-items: ${(props) => props.centered && "center"};
  justify-content: ${(props) => props.centered && "center"};
`;

const PageTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -1px;
`;

const ProfileName = styled.span`
  font-weight: 700;

  &:hover {
    color: ${theme.primaryColor};
  }
`;

export { Avatar, Loader, PageContainer, PageTitle, ProfileInfo, ProfileName };
