"use client";

import { ChevronUp } from "lucide-react";
import { css, styled } from "styled-components";

const activeButtonCss = css`
  background-color: ${({ theme }) => theme.colors.main};
  border-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`

const UpVoteButton = styled.button<{ $isVoted: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray["200"]};
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-25px);
  font-weight: 700;
  transition: 50ms ease background-color, color, border-color;
  cursor: pointer;

  &:hover {
    ${activeButtonCss}
  }

  ${(props) => props.$isVoted && activeButtonCss}
`;

type PostItemUpVoteButton = {
  votesCount: number;
  onClick(): void;
  isVoted: boolean;
}

export function PostItemUpVoteButton({ votesCount, onClick, isVoted }: PostItemUpVoteButton) {
  return (
    <UpVoteButton
      title="Upvote"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      $isVoted={isVoted}
    >
      <ChevronUp />
      {/* Dummy behavior */}
      <span>{isVoted ? votesCount + 1 : votesCount}</span>
    </UpVoteButton>
  );
}
