"use client";

import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
    </div>
  );
}