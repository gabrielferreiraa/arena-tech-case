import { listPosts } from "@/actions/list-posts";
import { Box } from "@/components/ui/Box";
import { PostList } from "@/components/posts/PostList";

export default async function NewestPostsPage() {
  const { nodes: posts, pageInfo } = await listPosts("NEWEST");

  return (
    <Box padding="1rem 0">
      <PostList
        initialPosts={posts}
        initialPageInfo={pageInfo}
      />
    </Box>
  );
}
