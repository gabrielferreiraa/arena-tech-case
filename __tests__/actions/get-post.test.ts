import { vi, describe, it, expect, beforeEach } from "vitest";
import { getPost } from "@/actions/get-post";
import { productHuntGraphQlFetch } from "@/lib/api";

vi.mock("@/lib/api", () => ({
  productHuntGraphQlFetch: vi.fn(),
}));

describe("[Server Action] Get Post", () => {
  const mockProductHuntGraphQlFetch = vi.mocked(productHuntGraphQlFetch);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch post successfully", async () => {
    const mockPostData = {
      post: {
        name: "Arena.im",
        description: "Create an AI-powered Community on your website.",
        media: [
          { url: "https://example.com/image1.jpg" },
          { url: "https://example.com/image2.jpg" }
        ]
      }
    };

    const mockResponse = {
      data: mockPostData
    };

    mockProductHuntGraphQlFetch.mockResolvedValueOnce(mockResponse);

    const result = await getPost("123");

    expect(mockProductHuntGraphQlFetch).toHaveBeenCalledWith(
      expect.stringContaining("query GetPost($id: ID!)"),
      { id: "123" }
    );
    expect(mockProductHuntGraphQlFetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockPostData.post);
  });
});