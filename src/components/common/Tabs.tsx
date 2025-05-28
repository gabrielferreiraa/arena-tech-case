"use client";

import styled from "styled-components";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Tabs = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabsList = styled(TabsPrimitive.List)`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

export const TabsTrigger = styled(TabsPrimitive.Trigger)`
  all: unset;
  padding: 1rem;
  cursor: pointer;
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 3px solid transparent;
  transition: 100ms ease border-bottom;

  &[data-state='active'] {
    color: ${({ theme }) => theme.colors.main};
    border-bottom: 3px solid ${({ theme }) => theme.colors.main};
    font-weight: 600;
  }

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.main};
  }
`;
