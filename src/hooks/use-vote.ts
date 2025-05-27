/**
 * As Product Hunt API requires an approval to handle with write access (e.g. vote).
 * I've created this custom hook to simulate the behavior using local storage.
 */

import { useState, useCallback, useEffect } from "react";

const LOCAL_STORAGE_KEY = "voted-post-ids";

export function useVote() {
  const [votedIds, setVotedIds] = useState<string[]>([]);

  useEffect(() => {
    const storedVotes = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedVotes) {
      try {
        setVotedIds(JSON.parse(storedVotes));
      } catch {
        setVotedIds([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(votedIds));
  }, [votedIds]);

  const vote = useCallback((postId: string) => {
    setVotedIds((previousVotedIds) => {
      if (previousVotedIds.includes(postId)) {
        return previousVotedIds.filter((id) => id !== postId);
      }
      
      return [...previousVotedIds, postId];
    });
  }, []);

  const isVoted = useCallback(
    (postId: string) => votedIds.includes(postId),
    [votedIds]
  );

  return { vote, isVoted };
}
