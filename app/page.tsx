
import Image from "next/image";
import { Suspense } from "react";
import { getMovies } from "./api.server";
import { CategoryControls } from "@/components/category-controls/category-controls";
import { PaginationControls } from "@/components/pagination-controls/pagination-controls";

async function RenderMovies({ page, category, sortBy }: { page: number, category: string, sortBy: string }) {
  const movies = await getMovies(page, category, sortBy);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-20 gap-y-10">
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

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string,
    sortBy: string
    category: string,
  }
}) {

  let page = parseInt(searchParams.page || "1", 10);
  let category = searchParams.category;
  let sortBy = searchParams.sortBy;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-[#3079a2] to-[#681a74] text-white">
      <CategoryControls page={page} />
      <Suspense fallback={<div>Loading...</div>}>
        <RenderMovies page={page} category={category} sortBy={sortBy} />
      </Suspense>
      <PaginationControls page={page} category={category} />
    </main >
  );
}



