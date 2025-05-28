"use client";

import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const ImageStyled = styled(Image)`
  border-radius: 10px;
`

type PostImageFeaturedProps = {
  src: string;
  name: string;
}

export function PostImageFeatured({ src, name }: PostImageFeaturedProps) {
  return (
    <ImageContainer>
      <ImageStyled src={src} fill alt={name} objectFit="cover" priority />
    </ImageContainer>
  )
}
