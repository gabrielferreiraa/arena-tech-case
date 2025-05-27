"use server"

import { productHuntGraphQlFetch } from "@/lib/api";
import { type Post } from "@/types/post";

export async function getPost(id: string) {
  const query = `
    query GetPost($id: ID!) {
      post(id: $id) {
        name
        tagline
        description
        votesCount
        url
        thumbnail {
          url
        }
        media {
          url
        }
      }
    }
  `;

  const post = await productHuntGraphQlFetch<{ post: Post }>(query, { id });
  
  return post.data.post;
}