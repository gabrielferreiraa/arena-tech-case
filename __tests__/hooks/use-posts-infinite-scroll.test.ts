import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { usePostsInfiniteScroll } from "@/hooks/use-posts-infinite-scroll";
import { listPosts } from "@/actions/list-posts";
import type { Post, PageInfo } from "@/types/post";

vi.mock("@/actions/list-posts");
vi.mock("@/hooks/use-infinite-scroll", () => ({
  useInfiniteScroll: vi.fn(({ onLoadMore }) => ({
    lastElementRef: vi.fn(onLoadMore),
    onLoadMore,
  })),
}));

describe("[Hook] usePostsInfiniteScroll", () => {
  const mockInitialPosts: Post[] = [
    {
      id: "1",
      name: "Arena Community",
      tagline: "An all-in-one solution that includes all widgets for content creation and interaction",
      description: "Bring your audience from social to your website and app with the power of AI. Build a home and monetize your community.",
      url: "https://arena.im/",
      thumbnail: { url: "https://arena.im/images/community-thumbnail.jpg" },
      media: [{ url: "https://arena.im/images/community-preview.jpg" }],
      votesCount: 100,
    },
    {
      id: "2",
      name: "YouTube",
      tagline: "Share your videos with friends, family, and the world",
      description: "YouTube is an online video sharing and social media platform owned by Google.",
      url: "https://www.youtube.com",
      thumbnail: { url: "https://www.youtube.com/img/desktop/yt_1200.png" },
      media: [{ url: "https://www.youtube.com/img/desktop/supported_browsers.png" }],
      votesCount: 95,
    },
  ];

  const mockInitialPageInfo: PageInfo = {
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: "start",
    endCursor: "end",
  };

  const mockListPosts = vi.mocked(listPosts);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with provided posts and page info", () => {
    const { result } = renderHook(() =>
      usePostsInfiniteScroll({
        initialPosts: mockInitialPosts,
        initialPageInfo: mockInitialPageInfo,
      })
    );

    expect(result.current.posts).toEqual(mockInitialPosts);
    expect(result.current.isPending).toBe(false);
  });

  it("should load more posts when triggered", async () => {
    const newPosts: Post[] = [
      {
        id: "3",
        name: "Instagram",
        tagline: "Capture and share the world's moments",
        description: "Instagram is a photo and video sharing social networking platform owned by Meta.",
        url: "https://www.instagram.com",
        thumbnail: { url: "https://www.instagram.com/static/images/image-1.png" },
        media: [{ url: "https://www.instagram.com/static/images/image-2.png" }],
        votesCount: 88,
      },
    ];

    const newPageInfo: PageInfo = {
      hasNextPage: false,
      hasPreviousPage: true,
      startCursor: "end",
      endCursor: "new-end",
    };

    mockListPosts.mockResolvedValueOnce({
      nodes: newPosts,
      pageInfo: newPageInfo,
    });

    const { result } = renderHook(() =>
      usePostsInfiniteScroll({
        initialPosts: mockInitialPosts,
        initialPageInfo: mockInitialPageInfo,
      })
    );

    await act(() => result.current.lastElementRef(document.createElement("div")));

    expect(mockListPosts).toHaveBeenCalledWith("RANKING", "end");
    expect(result.current.posts).toEqual([...mockInitialPosts, ...newPosts]);
  });

  it("should not load more if there is no next page", () => {
    const { result } = renderHook(() =>
      usePostsInfiniteScroll({
        initialPosts: mockInitialPosts,
        initialPageInfo: { ...mockInitialPageInfo, hasNextPage: false },
      })
    );

    act(() => {
      result.current.lastElementRef(document.createElement("div"));
    });

    expect(mockListPosts).not.toHaveBeenCalled();
  });
}); 