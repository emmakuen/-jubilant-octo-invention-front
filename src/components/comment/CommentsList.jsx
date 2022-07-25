import { Comment, CommentReplyDialog } from "..";
import useDialog from "../../hooks/useDialog";

const CommentsList = ({ comments, user }) => {
  const { openDialog, closeDialog, checkIsDialogOpen } = useDialog();
  const commentProps = { openDialog, user };

  return (
    <div data-testid="comment-list">
      {comments.map((comment) => {
        const dialogProps = { user, closeDialog, parentId: comment.id };
        const isDialogOpen = checkIsDialogOpen(comment.id);
        const hasReplies = !!comment.replies;
        return (
          <div key={comment.id}>
            <Comment
              {...commentProps}
              isDialogOpen={isDialogOpen}
              comment={comment}
              isParent={!!comment.replies}
            />
            {hasReplies &&
              comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  {...commentProps}
                  parentId={comment.id}
                  isDialogOpen={isDialogOpen}
                  comment={reply}
                  isReply
                />
              ))}
            {isDialogOpen && <CommentReplyDialog {...dialogProps} />}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
