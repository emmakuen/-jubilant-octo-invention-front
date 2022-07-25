import styled from "@emotion/styled";
import theme from "../../styles/theme";

const CommentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto 1fr;
  column-gap: ${theme.gridColumnGap};
  row-gap: 0.4rem;
  margin: ${theme.cardMargin} 0;
  padding-left: ${(props) =>
    props.isReply && `calc(${theme.cardMargin} + ${theme.gridColumnGap})`};
  &::before {
    content: "";
    position: absolute;
    background-color: ${theme.borderColor};
    width: 2px;
    height: ${(props) =>
      props.isParent
        ? `calc(100% - ${theme.avatarSize})`
        : `calc(100% + ${theme.cardMargin})`};
    left: calc(${theme.avatarSize} / 2);
    top: ${(props) =>
      props.isParent ? theme.avatarSize : `calc(${theme.cardMargin} * -1)`};

    all: ${(props) => !props.isParent && !props.isReply && "unset"};
  }
`;

export default CommentContainer;
