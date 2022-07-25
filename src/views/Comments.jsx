import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useComments } from "../contexts/useComments";
import { useUsers } from "../contexts/useUsers";
import {
  PageContainer,
  PageTitle,
  CommentForm,
  CommentsList,
} from "../components";
import * as toastHelpers from "../helpers/toast";

const Comments = ({ title }) => {
  const navigate = useNavigate();
  const { comments, postComment, fetchComments } = useComments();
  const { user } = useUsers();

  useEffect(() => {
    if (!user) {
      toastHelpers.showErrorMessage(
        "Please choose your profile.",
        "Login Error"
      );
      return navigate("/");
    }
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, fetchComments]);

  return (
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      <CommentForm user={user} postComment={postComment} />
      <hr />
      <CommentsList comments={comments} user={user} />
    </PageContainer>
  );
};

export default Comments;
