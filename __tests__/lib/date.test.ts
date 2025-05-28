import { format } from "date-fns";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { formatDateFeed } from "@/lib/date";

vi.mock("date-fns", () => ({
  format: vi.fn(),
}));

describe("[Lib] date/formatDateFeed", () => {
  const mockFormat = vi.mocked(format);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should call `format` function with the correct parameters", () => {
    const testDate = new Date("2024-01-15");
    mockFormat.mockReturnValue("15th, Jan");

    const result = formatDateFeed(testDate);

    expect(mockFormat).toHaveBeenCalledWith(testDate, "do, MMM");
    expect(mockFormat).toHaveBeenCalledTimes(1);
    expect(result).toBe("15th, Jan");
  });

  it("should return the formatted value", () => {
    const testDate = new Date("2024-12-25");
    mockFormat.mockReturnValue("25th, Dec");

    const result = formatDateFeed(testDate);

    expect(result).toBe("25th, Dec");
  });
});
