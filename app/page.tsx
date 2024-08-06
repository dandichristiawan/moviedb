import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { getMovies } from "./api.server";


export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string,
    category: string
  }
}) {

  let page = parseInt(searchParams.page || "1", 10);
  let category = searchParams.category || "top_rated";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-[#3079a2] to-[#681a74] text-white">
      <Link href={`/?page=${page}&category=top_rated`}>
        Top Rated
      </Link>
      <Link href={`/?page=${page}&category=now_playing`}>
        Now Playing
      </Link>
      <Link href={`/?page=${page}&category=popular`}>
        Popular
      </Link>
      <Link href={`/?page=${page}&category=upcoming`}>
        Upcoming
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <RenderMovies page={page} category={category} />
      </Suspense>
      <div className="flex justify-between mt-4">
        <Link href={`?page=${page - 1}&category=${category}`} className="text-black" aria-disabled={page === 1}>
          Previous
        </Link>
        <Link href={`?page=${page + 1}&category=${category}`} className="text-black">
          Next
        </Link>
      </div>
    </main >
  );
}

async function RenderMovies({ page, category }: { page: number, category: string }) {
  const movies = await getMovies(page, category);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {movies.map((movie) => (
          <div key={movie.id} className="flex flex-col gap-3 w-[200px]">
            <Image
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt="ok"
              width={200}
              height={300}
              loading="lazy"
              className="rounded-xl"
            />
            <div className="flex flex-row justify-between">
              <p className="text-[11px]">{movie.title}</p>
              <p className="text-[11px]">{movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

