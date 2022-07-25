import { PageContainer, PageTitle, Button } from "../components";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Message = styled.p`
  margin-top: -1rem;
`;

const NotFound = ({ title }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <PageContainer centered gapped>
      <PageTitle>{title}</PageTitle>
      <Message>
        The page you are looking for was moved, removed, renamed or might never
        existed.
      </Message>
      <Button primary text="Go Back to Home" onClick={handleClick} />
    </PageContainer>
  );
};

export default NotFound;
