import React from 'react';
import Link from 'next/link';

export const PaginationControls = ({
  page,
  category,
  sortBy,
  genres,
}: {
  page: number;
  category: string;
  sortBy: string;
  genres: number[];
}) => {
  const shouldRenderMoviesBySort = sortBy || genres.length > 0;
  return (
    <div className="flex flex-row w-11/12 justify-between p-2">
      {shouldRenderMoviesBySort ? (
        <>
          <Link
            href={`?page=${page - 1}&sort_by=${sortBy}&with_genres=${genres}`}
            className="text-white"
            aria-disabled={page === 1}
          >
            Previous
          </Link>
          <Link
            href={`?page=${page + 1}&sort_by=${sortBy}&with_genres=${genres}`}
            className="text-white"
          >
            Next
          </Link>
        </>
      ) : (
        <>
          <Link
            href={`?page=${page - 1}&category=${category}`}
            className="text-white"
            aria-disabled={page === 1}
          >
            Previous
          </Link>
          <Link
            href={`?page=${page + 1}&category=${category}`}
            className="text-white"
          >
            Next
          </Link>
        </>
      )}
    </div>
  );
};
