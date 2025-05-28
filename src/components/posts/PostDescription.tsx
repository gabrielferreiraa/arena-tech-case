"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray["300"]};
`;

type PostDescriptionProps = {
  children: ReactNode;
}

export function PostDescription({ children }: PostDescriptionProps) {
  return (
    <Description>{children}</Description>
  );
}
