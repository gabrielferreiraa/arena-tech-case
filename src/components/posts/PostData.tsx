"use client";

import Image from "next/image";
import { styled } from "styled-components";
import { Flex } from "@/components/ui/Flex";

const Name = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Tagline = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray["300"]};
  margin: 0.3rem 0;
`;

const Thumbnail = styled(Image)`
  border-radius: 10px;
`;

type PostDataProps = {
  name: string;
  tagline: string;
  thumbnailUrl: string;
}

export function PostData({ name, tagline, thumbnailUrl }: PostDataProps) {
  return (
    <Flex gap="1rem">
      <Thumbnail src={thumbnailUrl} width={50} height={50} alt={name} />
      <Flex justify="center" direction="column">
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
      </Flex>
    </Flex>
  );
}
