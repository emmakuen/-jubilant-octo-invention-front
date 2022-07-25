import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { ProfileName } from "..";
import * as datetimeHelpers from "../../helpers/datetime";

const CommentInfoContainer = styled.p`
  grid-column: span 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
`;

const CommentTimestamp = styled.span`
  position: relative;
  color: ${theme.textSecondaryColor};
  font-size: 0.8rem;
  &::before {
    content: "\\2219 ";
    font-weight: 900;
    opacity: 0.7;
    display: inline-block;
    margin-right: 0.6rem;
  }
`;

const CommentInfo = ({ comment, isReply }) => {
  const formattedTimestamp = datetimeHelpers.formatAsRelativeTime(
    comment.timestamp
  );
  const testId = isReply ? "reply-author-name" : "author-name";
  return (
    <CommentInfoContainer>
      <Link role="button" to="/" aria-label="See user profiles" tabIndex={0}>
        <ProfileName data-testid={testId}>{comment.author.name}</ProfileName>
      </Link>
      <CommentTimestamp>{formattedTimestamp}</CommentTimestamp>
    </CommentInfoContainer>
  );
};

export default CommentInfo;
