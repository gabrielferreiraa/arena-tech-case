"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/lib/theme";
import { GlobalStyle } from "@/components/layout/GlobalStyle";

const font = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
