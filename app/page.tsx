import Image from 'next/image';
import { Suspense } from 'react';
import { getMovies, getSortedMovies } from './api.server';
import { renderStars } from '@/components/rating/rating';
import { CategoryControls } from '@/components/category-controls/category-controls';
import { PaginationControls } from '@/components/pagination-controls/pagination-controls';
import Link from 'next/link';
import { getYYYY } from '@/lib/utils';



async function RenderMoviesByCategory({
  page,
  category,
}: {
  page: number;
  category: string;
}) {
  const movies = await getMovies(page, category);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-x-28 gap-y-10 p-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col gap-3 w-[200px] 2xl:w-[250px]"
          >
            <Link href={`/detail/${movie.id}`} passHref>
              <div className="relative group hover:bg-gradient-to-b from-gray-500 to-gray-400 rounded-xl">
                <Image
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt="ok"
                  width={200}
                  height={300}
                  loading="lazy"
                  className="rounded-xl w-[200px] h-[300px] 2xl:w-[250px] 2xl:h-[350px]"
                />
                <div className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-xl p-4">
                  <div className="flex flex-col gap-y-4 text-center items-center justify-center">
                    <p className="text-[14px]">{movie.title}</p>
                    <p className="text-[14px]">{getYYYY(movie.release_date)}</p>
                    <div className='flex flex-row items-center'>{renderStars(movie.vote_average)}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div >
    </>
  );
}

async function RenderMoviesBySort({
  page,
  sortBy,
  genres,
}: {
  page: number;
  sortBy: string;
  genres: number[];
}) {
  const movies = await getSortedMovies(page, sortBy, genres);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-x-28 gap-y-10 p-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col gap-3 w-[200px] 2xl:w-[250px]"
          >
            <Link href={`/detail/${movie.id}`} passHref>
              <div className="relative group hover:bg-gradient-to-b from-gray-500 to-gray-400 rounded-xl">
                <Image
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt="ok"
                  width={200}
                  height={300}
                  loading="lazy"
                  className="rounded-xl w-[200px] h-[300px] 2xl:w-[250px] 2xl:h-[350px]"
                />
                <div className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-xl p-4">
                  <div className="flex flex-col gap-y-4 text-center items-center justify-center">
                    <p className="text-[14px]">{movie.title}</p>
                    <p className="text-[14px]">{getYYYY(movie.release_date)}</p>
                    <div className='flex flex-row items-center'>{renderStars(movie.vote_average)}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div >
    </>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
    category?: string;
    sort_by?: string;
    with_genres?: string;
  };
}) {
  let page = parseInt(searchParams.page || '1', 10);
  let category = searchParams.category || '';
  let sortBy = searchParams.sort_by || '';
  let genres = searchParams.with_genres
    ? searchParams.with_genres.split(',').map(Number)
    : [];
  const shouldRenderMoviesBySort = sortBy || genres.length > 0;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-[#3079a2] to-[#681a74] text-white">
      <CategoryControls page={page} />
      <Suspense fallback={<div>Loading...</div>}>
        {shouldRenderMoviesBySort ? (
          <RenderMoviesBySort page={page} sortBy={sortBy} genres={genres} />
        ) : (
          <RenderMoviesByCategory
            page={page}
            category={category || 'popular'}
          />
        )}
      </Suspense>
      <PaginationControls
        page={page}
        category={category || 'popular'}
        sortBy={sortBy}
        genres={genres}
      />
    </main>
  );
}
