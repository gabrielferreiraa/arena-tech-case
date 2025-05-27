"use client";

import styled from "styled-components";

type FlexProps = {
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  gap?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "stretch" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: ${({ gap = "0" }) => gap};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
`;
