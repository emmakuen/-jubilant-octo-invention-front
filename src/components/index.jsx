import styled from "@emotion/styled";
import theme from "../styles/theme";

import Comment from "./comment/Comment";
import CommentForm from "./comment/CommentForm";
import CommentsList from "./comment/CommentsList";
import CommentReplyDialog from "./comment/CommentReplyDialog";
import Loader from "./shared/Loader";
import ProfileInfo from "./ProfileInfo";
import Button from "./shared/Button";

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

const ButtonContainer = styled.div`
  grid-column: 2 / -1;
  display: flex;
  gap: 2.4rem;
  margin-top: 0.6rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  margin: 2rem 0;
`;

const Input = styled.input`
  border: ${theme.borderColor} 1px solid;
  padding: 0.4rem;
  min-width: 120px;
  &:focus-visible {
    outline: ${theme.borderColorFocused} 1px solid;
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

export {
  Avatar,
  Button,
  ButtonContainer,
  Comment,
  CommentForm,
  CommentsList,
  CommentReplyDialog,
  Form,
  Input,
  Loader,
  PageContainer,
  PageTitle,
  ProfileInfo,
  ProfileName,
};
