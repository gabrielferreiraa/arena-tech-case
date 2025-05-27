import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useVote } from "@/hooks/use-vote";

const LOCAL_STORAGE_KEY = "voted-post-ids";

describe("[Hook] useVote", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("should initialize with empty votedIds if localStorage is empty", () => {
    const { result } = renderHook(() => useVote());

    expect(result.current.isVoted("123")).toBe(false);
  });

  it("should initialize with votedIds from localStorage", () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(["123"]));

    const { result } = renderHook(() => useVote());

    expect(result.current.isVoted("123")).toBe(true);
  });

  it("should vote a post and store it in localStorage", () => {
    const { result } = renderHook(() => useVote());

    act(() => {
      result.current.vote("123");
    });

    expect(result.current.isVoted("123")).toBe(true);

    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    expect(stored).toContain("123");
  });

  it("should unvote a post if already voted", () => {
    const { result } = renderHook(() => useVote());

    act(() => {
      result.current.vote("123");
    });

    expect(result.current.isVoted("123")).toBe(true);

    act(() => {
      result.current.vote("123");
    });

    expect(result.current.isVoted("123")).toBe(false);

    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    expect(stored).not.toContain("123");
  });
});
