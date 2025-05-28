"use client";

import styled from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const AvatarRoot = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

type AvatarProps = {
  src: string;
  name: string;
}

export function Avatar({ src, name }: AvatarProps) {
  return (
    <AvatarRoot>
			<AvatarImage
				src={src}
				alt={name}
			/>
		</AvatarRoot>
  )
}