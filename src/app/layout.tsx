import { StyledComponentsRegistry } from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arena Tech Case",
  description: "Product Hunt Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
