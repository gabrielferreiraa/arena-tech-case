"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";
import { formatDateFeed } from "@/lib/date";
import { usePostOrder } from "@/hooks/use-post-order";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/Tabs";
import { Avatar } from "@/components/common/Avatar";
import { Flex } from "@/components/ui/Flex";
import { Box } from "@/components/ui/Box";
import { Container } from "./Container";

const dummyUser = {
  name: "Gabriel Ferreira",
  avatar: "https://avatars.githubusercontent.com/u/17201177?v=4",
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  z-index: 1;
  left: 0;
  top: 0;
`;

const DateIndicator = styled.div`
  background-color: ${({ theme }) => theme.colors.gray["100"]};
  padding: 0.6rem 1.5rem;
  border-radius: 10px;
`;

export function Header() {
  const postOrder = usePostOrder();

  return (
    <StyledHeader>
      <Container>
        <Box padding="1rem">
          <Flex align="center" justify="space-between">
            <Avatar src={dummyUser.avatar} name={dummyUser.name} />
            <DateIndicator>
              {formatDateFeed(new Date())}
            </DateIndicator>
            <Search />
          </Flex>
        </Box>
        <Tabs defaultValue={postOrder}>
          <TabsList>
            <TabsTrigger value="RANKING" asChild>
              <Link href="/popular">
                Popular
              </Link>
            </TabsTrigger>
            <TabsTrigger value="NEWEST" asChild>
              <Link href="/newest">
                Newest
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </Container>
    </StyledHeader>
  )
};
