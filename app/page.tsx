import { Suspense } from "react";
import { getTopRatedMovies } from "./api.server";

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string
  }
}) {

  let page = parseInt(searchParams.page || "1", 10);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <RenderTopRatedMovies page={page} />
      </Suspense>
      <div className="flex justify-between mt-4">
        <a href={`?page=${page - 1}`} className="text-blue-500" aria-disabled={page === 1}>
          Previous
        </a>
        <a href={`?page=${page + 1}`} className="text-blue-500">
          Next
        </a>
      </div>
    </main >
  );
}

async function RenderTopRatedMovies({ page }: { page: number }) {
  const topRatedMovies = await getTopRatedMovies(page);
  return (
    <>
      {topRatedMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </>
  );
}
