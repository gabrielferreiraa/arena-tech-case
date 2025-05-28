import { listPosts } from "@/actions/list-posts";
import { Box } from "@/components/ui/Box";
import { PostList } from "@/components/posts/PostList";

export default async function PopularPostsPage() {
  const { nodes: posts, pageInfo } = await listPosts();

  return (
    <Box padding="1rem 0">
      <PostList
        initialPosts={posts}
        initialPageInfo={pageInfo}
      />
    </Box>
  );
}
