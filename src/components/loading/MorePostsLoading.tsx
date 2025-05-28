import styled from "styled-components";

const Loading = styled.div`
  text-align: center;
  padding: 1rem;
  font-weight: 600;
`;

export function MorePostsLoading() {
  return <Loading>Loading more posts...</Loading>;
}
