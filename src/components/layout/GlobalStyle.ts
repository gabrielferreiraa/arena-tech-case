"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-family: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray["100"]};
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`
