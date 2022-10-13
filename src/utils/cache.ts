export const cacheControl = (ttl = 60) => {
  return [
    "Cache-Control",
    `public, max-age=${ttl}, s-maxage=${ttl}, stale-while-revalidate=${ttl}`,
  ];
};
