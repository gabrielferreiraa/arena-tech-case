"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { useVote } from "@/hooks/use-vote";
import { Container } from "@/components/layout/Container";
import { Flex } from "@/components/ui/Flex";

const BottomBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 1.5rem 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const buttonCommonCss = css`
  padding: 0.8rem 3rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.gray["200"]};
`;

const GetItButton = styled.button`
  ${buttonCommonCss}
  background-color: ${({ theme }) => theme.colors.white};
`;

const UpVoteButton = styled.button`
  ${buttonCommonCss}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};
`;

type PostDetailsBottomBarProps = {
  votesCount: number;
  postId: string;
  postUrl: string;
};

export function PostDetailsBottomBar({ votesCount, postId, postUrl }: PostDetailsBottomBarProps) {
  const { vote } = useVote();

  return (
    <BottomBar>
      <Container>
        <Flex gap="1rem" justify="center">
          <Link href={postUrl} target="_blank">
            <GetItButton>
              Get it
            </GetItButton>
          </Link>
          <UpVoteButton onClick={() => vote(postId)}>Upvote ({votesCount})</UpVoteButton>
        </Flex>
      </Container>
    </BottomBar>
  );
}
