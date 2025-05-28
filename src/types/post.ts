export type Post = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  votesCount: number;
  url: string;
  thumbnail: {
    url: string;
  }
  media: {
    url: string;
  }[];
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};
