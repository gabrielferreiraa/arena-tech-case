import { describe, it, expect, vi, beforeAll } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { PostDetailsBottomBar } from "@/components/posts/PostDetailsBottomBar";
import { render } from "@/test/render";

const mockVote = vi.fn();

vi.mock("@/hooks/use-vote", () => ({
  useVote: () => ({ vote: mockVote }),
}));

describe("[Component] PostDetailsBottomBar", () => {
  const defaultProps = {
    votesCount: 42,
    postId: "123",
    postUrl: "https://producthunt.com/post-123",
  };

  beforeAll(() => render(<PostDetailsBottomBar {...defaultProps} />));

  it("should renders the 'Get it' button with correct link", () => {
    const link = screen.getByRole("link", { name: /get it/i });

    expect(link).toHaveAttribute("href", defaultProps.postUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should renders the 'Upvote' button with correct count", () => {
    const upvoteButton = screen.getByRole("button", { name: /upvote/i });

    expect(upvoteButton).toBeInTheDocument();
  });

  it("should calls vote with postId when 'Upvote' is clicked", () => {
    const upvoteButton = screen.getByRole("button", { name: /upvote/i });
    fireEvent.click(upvoteButton);

    expect(mockVote).toHaveBeenCalledWith(defaultProps.postId);
  });
}); 