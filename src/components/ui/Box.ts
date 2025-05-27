"use client";

import styled from "styled-components";

type BoxProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

export const Box = styled.div<BoxProps>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
`;
