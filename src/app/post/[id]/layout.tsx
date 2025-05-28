"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { Box } from "@/components/ui/box";
import { Container } from "@/components/layout/Container";
import { Flex } from "@/components/ui/Flex";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div>
      <Box padding="2rem 0 1rem">
        <Container>
          <Flex justify="space-between">
            <ChevronLeft onClick={router.back} />
            <MoreVertical />
          </Flex>
        </Container>
      </Box>
      <Container>
        {children}
      </Container>
    </div>
  );
}