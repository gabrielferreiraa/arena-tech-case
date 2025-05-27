import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, Mock } from "vitest";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";

describe("[Hook] useInfiniteScroll", () => {
  let mockIntersectionObserver: Mock;
  let observerCallback: (entries: IntersectionObserverEntry[]) => void;
  let disconnectMock: Mock;

  beforeEach(() => {
    disconnectMock = vi.fn();
    mockIntersectionObserver = vi.fn((callback) => {
      observerCallback = callback;
      return {
        observe: vi.fn(),
        disconnect: disconnectMock,
        unobserve: vi.fn(),
      };
    });

    global.IntersectionObserver = mockIntersectionObserver;
  });

  it("should create an observer when a node is provided and hasNextPage is true", () => {
    const onLoadMore = vi.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasNextPage: true,
        threshold: 100,
      })
    );

    const mockNode = document.createElement("div");
    result.current.lastElementRef(mockNode);

    expect(mockIntersectionObserver).toHaveBeenCalledTimes(1);
    expect(mockIntersectionObserver.mock.calls[0][1]).toEqual({
      rootMargin: "100px",
    });
  });

  it("should not create an observer when hasNextPage is false", () => {
    const onLoadMore = vi.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasNextPage: false,
        threshold: 100,
      })
    );

    const mockNode = document.createElement("div");
    result.current.lastElementRef(mockNode);

    expect(mockIntersectionObserver).not.toHaveBeenCalled();
  });

  it("should call onLoadMore when element is intersecting", () => {
    const onLoadMore = vi.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasNextPage: true,
        threshold: 100,
      })
    );

    const mockNode = document.createElement("div");
    result.current.lastElementRef(mockNode);

    observerCallback([{ isIntersecting: true } as IntersectionObserverEntry]);

    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it("should not call onLoadMore when element is not intersecting", () => {
    const onLoadMore = vi.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasNextPage: true,
        threshold: 100,
      })
    );

    const mockNode = document.createElement("div");
    result.current.lastElementRef(mockNode);

    observerCallback([{ isIntersecting: false } as IntersectionObserverEntry]);

    expect(onLoadMore).not.toHaveBeenCalled();
  });
}); 