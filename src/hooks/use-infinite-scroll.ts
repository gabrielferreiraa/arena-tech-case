import { useEffect, useRef, useCallback } from "react";

type UseInfiniteScrollOptions = {
  onLoadMore: () => void;
  hasNextPage: boolean;
  threshold?: number;
};

export function useInfiniteScroll({ 
  onLoadMore, 
  hasNextPage, 
  threshold = 100 
}: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);
  
  const lastElementRef = useCallback((node: HTMLElement | null) => {
    if (!hasNextPage) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    }, {
      rootMargin: `${threshold}px`
    });
    
    if (node) observer.current.observe(node);
  }, [hasNextPage, onLoadMore, threshold]);

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return { lastElementRef };
}
