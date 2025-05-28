"use client";

import styled from "styled-components";
import Link from "next/link";
import { MorePostsLoading } from "@/components/loading/MorePostsLoading";
import { useVote } from "@/hooks/use-vote";
import type { PageInfo, Post } from "@/types/post";
import { usePostsInfiniteScroll } from "@/hooks/use-posts-infinite-scroll";
import { usePostOrder } from "@/hooks/use-post-order";
import { PostItem } from "./PostItem";
import { PostData } from "./PostData";
import { PostItemUpVoteButton } from "./PostItemUpVoteButton";

const PostListStyled = styled.ul`
  list-style-type: none;

  & > li {
    margin-bottom: 1rem;
  }
`;

type PostListProps = {
  initialPosts: Post[];
  initialPageInfo: PageInfo;
}

export function PostList({ initialPosts, initialPageInfo }: PostListProps) {
  const postOrder = usePostOrder();

  const { isVoted, vote } = useVote();

  const {
    posts,
    isPending,
    lastElementRef,
  } = usePostsInfiniteScroll({
    initialPosts,
    initialPageInfo,
    order: postOrder,
  });

  return (
    <PostListStyled>
      {posts?.map((post, index) => {
        const isLastPost = index === posts.length - 1;

        return (
          <PostItem
            key={post.id}
            ref={isLastPost ? lastElementRef : null}
          >
            <Link href={`/post/${post.id}`}>
              <PostData
                name={post.name}
                tagline={post.tagline}
                thumbnailUrl={post.thumbnail.url}
              />
            </Link>
            <PostItemUpVoteButton
              votesCount={post.votesCount}
              onClick={() => vote(post.id)}
              isVoted={isVoted(post.id)}
            />
          </PostItem>
        );
      })}
      {isPending && <MorePostsLoading />}
    </PostListStyled>
  );
}