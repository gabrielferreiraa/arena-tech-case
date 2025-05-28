"use server"

const PRODUCT_HUNT_GRAPHQL_API_URL =  process.env.PRODUCT_HUNT_GRAPHQL_API_URL || "";
const PRODUCT_HUNT_API_TOKEN =  process.env.PRODUCT_HUNT_API_TOKEN;

type GraphQLResponse<T> = {
  data: T;
}

export async function productHuntGraphQlFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<GraphQLResponse<T>> {
  const response = await fetch(PRODUCT_HUNT_GRAPHQL_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${PRODUCT_HUNT_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (!response.ok) {
    throw new Error(`Product Hunt API error: ${response.statusText}`)
  }

  return response.json()
}
