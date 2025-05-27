"use client";

import { PostsOrder } from "@/actions/list-posts";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function usePostOrder() {
  const pathname = usePathname();

  const postOrder: PostsOrder | undefined = useMemo(() => {
    if (pathname === "/popular") {
      return "RANKING";
    }

    if (pathname === "/newest") {
      return "NEWEST";
    }

    return;
  }, [pathname]);

  return postOrder;
}
