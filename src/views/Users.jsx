import React from "react";
import styled from "@emotion/styled";
import { ProfileInfo, PageContainer, PageTitle, Loader } from "../components";

import { useUsers } from "../contexts/useUsers";

const ProfileForm = styled.form`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const Users = ({ title }) => {
  const { users, loading, login } = useUsers();

  const renderForm = () => {
    if (loading) return <Loader />;
    return (
      <ProfileForm>
        {users.map((user) => (
          <ProfileInfo user={user} key={user.id} login={login} />
        ))}
      </ProfileForm>
    );
  };

  return (
    <PageContainer centered>
      <PageTitle>{title}</PageTitle>
      {renderForm()}
    </PageContainer>
  );
};

export default Users;
