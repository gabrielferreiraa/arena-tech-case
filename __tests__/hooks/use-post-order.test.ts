import { renderHook } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { usePostOrder } from "@/hooks/use-post-order";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("[Hook] usePostOrder", () => {
  const mockUsePathname = vi.mocked(usePathname);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return `RANKING` when pathname is `/popular`", () => {
    mockUsePathname.mockReturnValue("/popular");

    const { result } = renderHook(() => usePostOrder());

    expect(result.current).toBe("RANKING");
  });

  it("should return `NEWEST` when pathname is `/newest`", () => {
    mockUsePathname.mockReturnValue("/newest");

    const { result } = renderHook(() => usePostOrder());

    expect(result.current).toBe("NEWEST");
  });
});