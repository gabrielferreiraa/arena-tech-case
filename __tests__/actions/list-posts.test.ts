import { vi, describe, it, expect, beforeEach } from "vitest";
import { listPosts } from "@/actions/list-posts";
import { productHuntGraphQlFetch } from "@/lib/api";

vi.mock("@/lib/api", () => ({
  productHuntGraphQlFetch: vi.fn(),
}));

describe("[Server Action] List Posts", () => {
  const mockProductHuntGraphQlFetch = vi.mocked(productHuntGraphQlFetch);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch posts successfully", async () => {
    const mockPostsData = {
      nodes: [
        {
          id: "1",
          name: "Arena.im",
          tagline: "Create an AI-powered Community on your website.",
          thumbnail: {
            url: "https://example.com/thumbnail1.jpg"
          },
          votesCount: 125
        },
        {
          id: "2",
          name: "YouTube",
          tagline: "Share your videos with friends, family, and the world.",
          thumbnail: {
            url: "https://example.com/thumbnail2.jpg"
          },
          votesCount: 89
        }
      ],
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "cursor-start",
        endCursor: "cursor-end"
      }
    };

    const mockResponse = {
      data: {
        posts: mockPostsData,
      }
    };

    mockProductHuntGraphQlFetch.mockResolvedValueOnce(mockResponse);

    const result = await listPosts("RANKING");

    expect(mockProductHuntGraphQlFetch).toHaveBeenCalledWith(
      expect.stringContaining("query ListPosts($order: PostsOrder!, $after: String)"),
      { order: "RANKING" }
    );
    expect(mockProductHuntGraphQlFetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockPostsData);
    expect(result.nodes).toHaveLength(2);
  });
});