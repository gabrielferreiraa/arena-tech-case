"use client";

import { forwardRef } from "react";
import styled from "styled-components";

const StyledPostItem = styled.li`
  padding: 1rem 2.5rem 1rem 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  transition: 100ms ease transform;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 1px 7px 0px #00000017;
    cursor: pointer;
  }
`;

export const PostItem = forwardRef<HTMLLIElement, { children: React.ReactNode }>(
  ({ children, ...props }, ref) => {
    return (
      <StyledPostItem ref={ref} {...props}>
        {children}
      </StyledPostItem>
    );
  }
);

PostItem.displayName = "PostItem";
