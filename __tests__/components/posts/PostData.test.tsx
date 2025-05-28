import { expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { PostData } from "@/components/posts/PostData";
import { render } from "@/test/render";

test("[Component] PostData", () => {
  render(
    <PostData
      name="Arena.im"
      tagline="Create an AI-powered Community on your website"
      thumbnailUrl="https://avatars.githubusercontent.com/u/17201177?v=4"
    />,
  );

  expect(
    screen.getByRole("heading", { level: 4, name: /arena.im/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/create an ai-powered community on your website/i),
  ).toBeInTheDocument();

  const thumbnail = screen.getByRole("img", { name: /arena.im/i });
  expect(thumbnail).toBeInTheDocument();
});