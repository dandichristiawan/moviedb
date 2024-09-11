import { getMovieById } from '@/app/api.server';

export default async function Detail({
    params
}: {
    params: { id: string };
}) {

    const data = await getMovieById(params.id);

    if (!data) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4"></h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                className="w-[200px] h-[300px] rounded-xl mb-4"
            />
            <p className="text-sm mb-4">{data.overview}</p>
            <p className="text-sm">Release Date: {data.release_date}</p>
            <p className="text-sm">Rating: {data.vote_average}/10</p>
        </div>
    );
}
