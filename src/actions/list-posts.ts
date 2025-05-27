"use server"

import { productHuntGraphQlFetch } from "@/lib/api"
import type { PageInfo, Post } from "@/types/post";

export type PostsOrder = "RANKING" | "NEWEST";

export async function listPosts(order: PostsOrder = "RANKING", after?: string) {
  const query = `
    query ListPosts($order: PostsOrder!, $after: String) {
      posts(order: $order, after: $after, first: 20) {
        nodes {
          id
          name
          tagline
          thumbnail {
            url
          }
          votesCount
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  `;

  type Response = {
    posts: {
      nodes: Post[];
      pageInfo: PageInfo;
    };
  }

  const response = await productHuntGraphQlFetch<Response>(query, {
    order,
    after,
  });
  
  return response.data.posts;
}