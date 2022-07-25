import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import CommentsList from "./CommentsList";
import COMMENTS from "./__data__/comments";
import { CommentsContext } from "../../contexts/useComments";
import * as socketConnection from "../../socket/socketConnection";
import userEvent from "@testing-library/user-event";

const USER = {
  id: 1,
  email: "robhope@example.com",
  name: "Rob Hope",
  profilePicUrl: "https://randomuser.me/api/portraits/men/75.jpg",
};

jest.mock("../../socket/socketConnection", () => {
  return {
    listenForToggleUpvote: jest.fn((data) => data),
    removeToggleUpvoteListener: jest.fn(),
  };
});

const toggleCommentLike = jest.fn();
const postComment = jest.fn();

const Wrapper = ({ children }) => {
  return (
    <CommentsContext.Provider value={{ toggleCommentLike, postComment }}>
      <MemoryRouter>{children}</MemoryRouter>
    </CommentsContext.Provider>
  );
};

const renderWithWrapper = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

describe("CommentsList", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("render list of comments correctly", () => {
    renderWithWrapper(<CommentsList comments={COMMENTS} user={USER} />);

    const authorNames = screen
      .getAllByTestId("author-name")
      .map((element) => element.textContent);

    const replyAuthorNames = screen
      .getAllByTestId("reply-author-name")
      .map((element) => element.textContent);
    const commentContainer = screen.getByTestId("comment-list");
    expect(authorNames).toMatchSnapshot();
    expect(replyAuthorNames).toMatchSnapshot();
    expect(commentContainer).toMatchSnapshot();
  });

  test("listen for upvote event and toggle upvote on button click", async () => {
    renderWithWrapper(<CommentsList comments={[COMMENTS[0]]} user={USER} />);

    expect(socketConnection.listenForToggleUpvote).toBeCalled();
    const upvoteButton = screen.getByRole("button", { name: /▲ upvote/i });
    userEvent.click(upvoteButton);

    await waitFor(() => {
      expect(toggleCommentLike).toHaveBeenCalled();
    });
  });

  test("dialog opens when reply button is clicked and closes when cancel is clicked", async () => {
    renderWithWrapper(<CommentsList comments={[COMMENTS[0]]} user={USER} />);

    const replyButton = screen.getByRole("button", { name: /reply/i });
    userEvent.click(replyButton);
    await waitFor(() => {
      expect(screen.getByTestId("dialog")).toBeInTheDocument();
    });

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    userEvent.click(cancelButton);
    await waitFor(() => {
      expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
    });
  });

  test("dialog posts reply and closes when post button is clicked", async () => {
    renderWithWrapper(<CommentsList comments={[COMMENTS[0]]} user={USER} />);

    const replyButton = screen.getByRole("button", { name: /reply/i });
    userEvent.click(replyButton);

    // initially, expect post button to be disabled when input is empty
    const postButton = screen.getByRole("button", { name: /post/i });
    expect(postButton).toBeDisabled();

    // after typing input and clicking post button,
    // expect comment to be posted and dialog to be closed
    const dialog = screen.getByTestId("dialog");
    const input = within(dialog).getByRole("textbox");
    const content = "hello";
    userEvent.type(input, content);
    userEvent.click(postButton);
    await waitFor(() => expect(dialog).not.toBeInTheDocument());
    expect(postComment).toHaveBeenCalledWith({
      parentId: COMMENTS[0].id,
      content,
    });
  });
});
