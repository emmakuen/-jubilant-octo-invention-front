import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Avatar, ProfileName } from ".";
import theme from "../styles/theme";

const RadioInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.gridColumnGap};
  padding: 0.4rem 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.borderColor};
    border-radius: ${theme.borderRadius};
  }
  &:hover > img {
    border: 1px solid ${theme.primaryColor};
  }
  &:hover > span {
    color: ${theme.primaryColor};
  }
`;

const ProfileInfo = ({ user, login }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    login(user);
    navigate("/comments");
  };

  return (
    <InputLabel
      htmlFor={`profile-${user.id}`}
      onClick={handleClick}
      tabIndex={0}
    >
      <Avatar src={user.profilePicUrl} alt={`profile of ${user.name}`} />
      <RadioInput type="radio" name="profile-radio" id={`profile-${user.id}`} />
      <ProfileName>{user.name}</ProfileName>
    </InputLabel>
  );
};

export default ProfileInfo;
