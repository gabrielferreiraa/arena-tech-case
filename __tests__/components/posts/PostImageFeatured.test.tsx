import { expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { PostImageFeatured } from "@/components/posts/PostImageFeatured";
import { render } from "@/test/render";

test("[Component] PostImageFeatured", () => {
  const sampleText = "Post description.";
  render(<PostImageFeatured src="https://avatars.githubusercontent.com/u/17201177?v=4" name="Sample Image" />);

  const thumbnail = screen.getByRole("img", { name: /sample image/i });
  expect(thumbnail).toBeInTheDocument();
}); 