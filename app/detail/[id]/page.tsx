import React from 'react';
import { getYYYY } from '@/lib/utils';
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { getMovieById } from '@/app/api.server';
import { Separator } from "@/components/ui/separator"
import { LucideStar } from 'lucide-react';
import { CarouselSize } from '@/components/details-carousel/details-carousel';


export default async function Detail({
    params
}: {
    params: { id: string };
}) {

    const data = await getMovieById(params.id);
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    if (!data) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="flex min-h-screen flex-col justify-between p-24 bg-gradient-to-br from-[#3079a2] to-[#681a74] text-white">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold">{data.original_title}</h1>
                    <div className="flex flex-row gap-x-2">
                        <p>{getYYYY(data.release_date)}</p>
                        <p>{data.runtime} min</p>
                        <p>{data.adult ? "18+" : "PG-13"}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                    <LucideStar size={45} />
                    <div className="flex flex-col">
                        <h1 className='text-start'>Rating</h1>
                        <p>{data.vote_average} / 10</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-x-8">
                <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={data.title}
                    className="w-[270px] h-[400px] rounded-xl mb-4"
                />
                <div className="flex flex-col">
                    <p className="text-lg mb-4 text-justify ">{data.overview}</p>
                    <CarouselSize production_companies={data.production_companies} />
                </div>
            </div>

            <div className="flex flex-row gap-x-4">
                {data.genres.map((d, idx) => {
                    return (
                        <React.Fragment key={d.id}>
                            <Badge className='w-fit p-2'>{d.name}</Badge>
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="grid grid-cols-3 gap-x-4">
                <div className="col-span-2">
                    <div className="flex flex-col gap-y-4 my-4">
                        <Separator />

                        <div className="flex flex-row items-center gap-x-3">
                            <h1 className='font-semibold'>Director</h1>
                            {data.credits.crew.filter(x => x.job === "Director").map((c) => (
                                <p key={c.id} className="text-sm text-blue-400">{c.name}</p>
                            ))}
                        </div>

                        <Separator />

                        <div className="flex flex-row items-center gap-x-3">
                            <h1 className='font-semibold'>Writers</h1>
                            <div className="flex flex-row gap-x-3 text-blue-400">
                                {data.credits.crew.filter(x => x.job === "Writer").map((c, idx) => (
                                    <p key={c.id} className="text-sm">{c.name} <span>•</span></p>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        <div className="flex flex-row items-center gap-x-3">
                            <h1 className='font-semibold'>Stars</h1>
                            <div className="flex flex-row gap-x-2 text-blue-400">
                                {data.credits.cast.slice(0, 3).map((c, idx) => (
                                    <p key={c.id} className='text-sm'>{c.name} {idx < 2 && <span>•</span>}</p>
                                ))}
                            </div>
                        </div>

                        <Separator />
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <div className="flex flex-col gap-y-8">
                        <Button>Add to Watchlist</Button>
                        <div className="flex flex-row gap-x-2">
                            <div className="flex flex-row">
                                <h2>{data.vote_count}</h2>
                                <p className='ml-2'>Voute Count</p>
                            </div>
                            <div className="flex flex-row">
                                <h2>{data.vote_average}</h2>
                                <p className='ml-2'>Vote Average</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <h1>
                                {data.popularity}
                            </h1>
                            <p>Popularity</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-sm">Release Date: </p>
            <p className="text-sm">Rating: {data.vote_average}/10</p>
            <p className="text-sm">{data.adult}</p>
            <p className="text-sm">{data.budget}</p>
            <p className="text-sm">{data.homepage}</p>
            <p className="text-sm">{data.origin_country}</p>
            <p className="text-sm">{data.original_language}</p>

            <p className="text-sm">{data.popularity}</p>
            {data.production_countries.map((pc, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <p className="text-sm">{pc.iso_3166_1}</p>
                        <p className="text-sm">{pc.name}</p>
                    </React.Fragment>
                )
            })}
            <p className="text-sm">{data.revenue}</p>
            <p className="text-sm">{data.status}</p>
            <p className="text-sm">{data.tagline}</p>
            <p className="text-sm">{data.video}</p>
            <p className="text-sm">{data.vote_average}</p>
            <p className="text-sm">{data.vote_count}</p>


        </div>
    );
}
