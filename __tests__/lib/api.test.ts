import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { productHuntGraphQlFetch } from "@/lib/api";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("[Lib] api/productHuntGraphQlFetch", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should make a GraphQL request with query and variables", async () => {
    const mockResponse = {
      data: { post: { id: "1", name: "Test Product" } }
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse)
    });

    const query = "query GetPost($id: ID!) { post(id: $id) { id name } }";
    const variables = { id: "1" };
    
    const result = await productHuntGraphQlFetch(query, variables);

    expect(mockFetch).toHaveBeenCalledWith(
      process.env.PRODUCT_HUNT_GRAPHQL_API_URL,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.PRODUCT_HUNT_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query,
          variables
        })
      }
    );

    expect(result).toEqual(mockResponse);
  });

  it("should throw an error when the request isn't ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized"
    });

    const query = "query { posts { id } }";

    await expect(productHuntGraphQlFetch(query)).rejects.toThrow(
      "Product Hunt API error: Unauthorized"
    );
  });
});