import { useState, useTransition } from "react";
import { useInfiniteScroll } from "./use-infinite-scroll";
import { listPosts, PostsOrder } from "@/actions/list-posts";
import type { PageInfo, Post } from "@/types/post";

type UsePostsInfiniteScrollProps = {
  initialPosts: Post[];
  initialPageInfo: PageInfo;
  order?: PostsOrder;
};

export function usePostsInfiniteScroll({
  initialPosts,
  initialPageInfo,
  order = "RANKING"
}: UsePostsInfiniteScrollProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [isPending, startTransition] = useTransition();

  const loadMore = async () => {
    if (!pageInfo.hasNextPage || isPending) return;

    startTransition(async () => {
      try {
        const { nodes: newPosts, pageInfo: newPageInfo } = await listPosts(
          order, 
          pageInfo.endCursor
        );
        
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
        setPageInfo(newPageInfo);
      } catch (error) {
        console.error("Failed to load more posts:", error);
      }
    });
  };

  const { lastElementRef } = useInfiniteScroll({
    onLoadMore: loadMore,
    hasNextPage: pageInfo.hasNextPage,
  });

  return {
    posts,
    isPending,
    lastElementRef,
  };
}
