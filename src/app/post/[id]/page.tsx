import { getPost } from "@/actions/get-post";
import { Box } from "@/components/ui/Box";
import { PostDescription } from "@/components/posts/PostDescription";
import { PostImageFeatured } from "@/components/posts/PostImageFeatured";
import { PostData } from "@/components/posts/PostData";
import { PostDetailsBottomBar } from "@/components/posts/PostDetailsBottomBar";

type PostPageProps = {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  const post = await getPost(id);

  return (
    <>
      <Box padding="1rem 0 7rem 0">
        <PostImageFeatured src={post?.media?.[0].url} name={post.name} />
        <Box margin="2rem 0">
          <PostData
            name={post.name}
            tagline={post.tagline}
            thumbnailUrl={post.thumbnail.url}
          />
        </Box>
        <PostDescription>{post.description}</PostDescription>
      </Box>
      <PostDetailsBottomBar
        votesCount={post.votesCount}
        postId={id}
        postUrl={post.url}
      />
    </>
  );
}
