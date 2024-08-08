import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

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
        <div className="flex flex-row w-11/12 justify-between p-2 my-10">
            {shouldRenderMoviesBySort ? (
                <>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href={`?page=${page - 1}&sort_by=${sortBy}&with_genres=${genres}`}
                                    className="text-white"
                                    aria-disabled={page === 1}
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext
                                    href={`?page=${page + 1}&sort_by=${sortBy}&with_genres=${genres}`}
                                    className="text-white"
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </>
            ) : (
                <>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={`?page=${page - 1}&category=${category}`}
                                    className="text-white"
                                    aria-disabled={page === 1}
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive className='text-black'>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext
                                    href={`?page=${page + 1}&category=${category}`}
                                    className="text-white"
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </>
            )}

        </div>
    );
};
