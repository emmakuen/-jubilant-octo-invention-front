import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "./CommentForm";
import { MemoryRouter } from "react-router-dom";

describe("CommentForm", () => {
  test("content is posted when the button is clicked after input", async () => {
    const postComment = jest.fn((data) => data);
    const content = "hello";

    render(
      <MemoryRouter>
        <CommentForm postComment={postComment} />
      </MemoryRouter>
    );

    const postButton = screen.getByRole("button", { name: /comment/i });
    const input = screen.getByRole("textbox", { name: /your comment/i });
    userEvent.type(input, content);
    userEvent.click(postButton);

    await waitFor(() => {
      expect(postComment).toHaveBeenCalledWith({ content });
    });
  });
});
