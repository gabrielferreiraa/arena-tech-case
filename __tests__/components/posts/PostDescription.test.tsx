import { expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { PostDescription } from "@/components/posts/PostDescription";
import { render } from "@/test/render";

test("[Component] PostDescription", () => {
  const sampleText = "Post description.";
  render(<PostDescription>{sampleText}</PostDescription>);

  expect(screen.getByText(sampleText)).toBeDefined();
}); 