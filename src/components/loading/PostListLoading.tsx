"use client";

import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Box } from "@/components/ui/Box";

import "react-loading-skeleton/dist/skeleton.css";

const StyledSkeleton = styled(Skeleton)`
  margin-bottom: 1rem;
`;

export function PostListLoading() {
  return (
    <Box padding="1rem">
      <StyledSkeleton height={80} count={10} />
    </Box>
  );
}